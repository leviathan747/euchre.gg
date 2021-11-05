import React from 'react';

import EuchrePlayer from './EuchrePlayer';
import EuchreTable from './EuchreTable';

import { v4 as uuidv4 } from 'uuid';

export default class EuchreGame extends React.Component {

  constructor(props) {
    super(props);
    this.player = 0;
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
          ['QC', 'JD', 'QH', 'AH', 'TS'],
          ['KS', 'JS', '9S', 'KD', 'TD'],
          ['9C', 'QD', 'JH', 'QS', 'AS'],
          ['KC', 'AC', '9D', 'TC', 'TH']
        ],
        kitty: ['JCD', 'KHD', 'ADD', '9H'],
        pile: []
      }
    }
    this.props.setGameState(initialState, gameId);
    this.setState(Object.assign({}, this.state, {player: undefined}));
    setInterval(() => {
      const state = initialState;
      const card = state.hand.hands[this.player].pop();
      if (card) {
        state.hand.pile.push(card);
      }
      this.player = (this.player + 1) % 4;
      this.props.setGameState(state, gameId);
    }, 1000);
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
