import React from 'react';

import EuchrePlayer from './EuchrePlayer';
import Game from './Game';

export default class EuchreGame extends Game {

  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      gameState: {
        id: '12345',
        game: {
          aScore: 0,
          bScore: 0
        },
        hand: {
          turn: 1,
          trump: undefined,
          topCard: '10C',
          invalidSuit: undefined,
          hands: [
            ['QC', 'JS', 'AH', 'JC', 'QH']
          ]
        }
      }
    }
  }

  render() {
    return this.state.player ? (
      <EuchrePlayer player={this.state.player} gameState={this.state.gameState} onGameStateChange={this.setGameState.bind(this)}/>
    ) : (
      <div>TODO</div>
    );
  }

}
