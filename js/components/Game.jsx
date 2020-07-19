import React from 'react';

const API_ENDPOINT = 'https://svpxn7ws85.execute-api.us-east-1.amazonaws.com/test';

export default class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  async setGameState(state, gameId, lastModified) {
    try {
      const data = await fetch(`${API_ENDPOINT}/game/${gameId || this.state.gameId}`, {
        method: 'POST',
        body: JSON.stringify({
          last_modified: lastModified || this.state.lastModified,
          game_state: state
        })
      }).then(r => r.json());
      if (data.success) {
        this.setState(Object.assign({}, this.state, {gameId: gameId || this.state.gameId, lastModified: data.last_modified, gameState: state}));
      }
      else {
        console.error(data.message);
        this.setState(Object.assign({}, this.state, {gameId: gameId || this.state.gameId, lastModified: data.last_modified, gameState: data.game_state}));
      }
    } catch (err) {
      console.error('Failed to fetch', err);
    }
  }

  async checkGameState() {
    // TODO
  }

  render() {
    //return React.cloneElement(this.props.game, {gameState: this.state.gameState, setGameState: this.setGameState.bind(this)});
    return <this.props.game gameState={this.state.gameState} setGameState={this.setGameState.bind(this)} />;
  }

}
