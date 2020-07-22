import React from 'react';

import EuchrePlayer from './EuchrePlayer';
import EuchreTable from './EuchreTable';

import { v4 as uuidv4 } from 'uuid';

export default class EuchreGame extends React.Component {

  constructor(props) {
    super(props);
    this.score = 0;
  }

  componentDidMount() {
    const gameId = uuidv4();
    const initialState = {
      game: {
        oddScore: 0,
        evenScore: 0
      },
      hand: {
        dealer: 4,
        turn: 1,
        trump: undefined,
        topCard: undefined, //'QD',
        invalidSuit: 'H',
        hands: [
          ['QC', 'JD', 'QH', 'AH'],
          ['KS', 'JS', '9S', 'KD'],
          ['9C', 'QD', 'JH', 'QS'],
          ['KC', 'AC', '9D', '10C']
        ],
        kitty: [
          {cardFace: 'JC', faceDown: true},
          {cardFace: 'KH', faceDown: true},
          {cardFace: 'AD', faceDown: true},
          {cardFace: '9H', faceDown: false}
        ],
        pile: ['10S', '10D', 'AS', '10H']
      }
    }
    this.props.setGameState(initialState, gameId);
    this.setState(Object.assign({}, this.state, {player: undefined}));
    // setInterval(() => {
    //   const state = initialState;
    //   state.game.oddScore = (this.score + 1) % 11;
    //   this.score++;
    //   this.props.setGameState(state, gameId);
    // }, 3000);
  }

  render() {
    if (this.props.gameState) {
      return this.state.player ? (
        <EuchrePlayer player={this.state.player} gameState={this.props.gameState} onGameStateChange={this.props.setGameState.bind(this)} />
      ) : (
        <EuchreTable player={this.state.player} gameState={this.props.gameState} onGameStateChange={this.props.setGameState.bind(this)} />
      );
    }
    else {
      return null;
    }
  }

}
