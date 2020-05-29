import React from 'react';

import EuchrePlayer from './EuchrePlayer';
import Game from './Game';

export default class EuchreGame extends Game {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const gameId = '12345';
    const initialState = {
      game: {
        aScore: 0,
        bScore: 0
      },
      hand: {
        dealer: 1,
        turn: 1,
        trump: undefined,
        topCard: 'QD',
        invalidSuit: 'H',
        hands: [
          ['QC', 'JS', 'AH', 'JC', 'QH']
        ]
      }
    }
    this.setGameState(initialState, gameId);
    this.setState(Object.assign({}, this.state, {player: 1}));
  }

  render() {
    if (this.state.gameState) {
      return this.state.player ? (
        <EuchrePlayer player={this.state.player} gameState={this.state.gameState} onGameStateChange={this.setGameState.bind(this)}/>
      ) : (
        <div>TODO</div>
      );
    }
    else {
      return null;
    }
  }

}
