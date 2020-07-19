import React from 'react';

import EuchrePlayer from './EuchrePlayer';
import EuchreTable from './EuchreTable';

import { v4 as uuidv4 } from 'uuid';

export default class EuchreGame extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const gameId = uuidv4();
    const initialState = {
      game: {
        aScore: 0,
        bScore: 0
      },
      hand: {
        dealer: 1,
        turn: 1,
        trump: undefined,
        topCard: undefined, //'QD',
        invalidSuit: 'H',
        hands: [
          ['QC', 'JS', 'AH', 'JC', 'QH']
        ]
      }
    }
    this.props.setGameState(initialState, gameId);
    this.setState(Object.assign({}, this.state, {player: undefined}));
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
