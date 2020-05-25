import React from 'react';

export default class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  setGameState(state) {
    this.setState(Object.assign({}, this.state, {gameState: state}));
  }

}
