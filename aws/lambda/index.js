var AWS = require('aws-sdk');
AWS.config.update({region: process.env.region});
const ddb = new AWS.DynamoDB.DocumentClient();
const DAY_S = 24 * 60 * 60;

exports.handler = async (event) => {
  const game_id = event.pathParameters.game_id;
  const body = JSON.parse(event.body);
  const last_modified = event.queryStringParameters && event.queryStringParameters.last_modified || body && body.last_modified;
  const new_game_state = body && body.game_state;
  const current_state = await ddb.get({TableName: 'games', Key: {'game_id': game_id}}).promise();
  const now = new Date().getTime();
  const resp = {success: false, message: ''};
  if (new_game_state) {
    // set state
    const new_state = {game_id: game_id, last_modified: now, expiration: Math.floor(now / 1000) + DAY_S, game_state: new_game_state};
    if (current_state.Item) {
      // update existing item
      try {
        await ddb.put({TableName: 'games', Item: new_state, Expected: {'last_modified': {Value: last_modified}}}).promise();
        resp.success = true;
        resp.last_modified = now;
      } catch (err) {
        console.warn('Failed to set game state', err);
        resp.success = false;
        resp.message = 'Failed to set game state';
        resp.last_modified = current_state.Item.last_modified;
        resp.game_state = current_state.Item.game_state;
      }
    } else {
      // create new item
      await ddb.put({TableName: 'games', Item: new_state}).promise();
      resp.success = true;
      resp.last_modified = now;
    }
  } else {
    // checking state
    resp.success = Boolean(current_state.Item && (now / 1000) < current_state.Item.expiration);
    if (resp.success) {
      if (current_state.Item.last_modified !== parseInt(last_modified)) {
        resp.last_modified = current_state.Item.last_modified;
        resp.game_state = current_state.Item.game_state;
      } else {
        resp.message = 'Game state unchanged';
      }
    } else {
      resp.message = 'Game does not exist';
    }
  }
  return {statusCode: 200, headers: {'Access-Control-Allow-Origin': '*'}, body: JSON.stringify(resp)};
};
