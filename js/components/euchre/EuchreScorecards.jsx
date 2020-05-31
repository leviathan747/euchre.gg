import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from '../cards/Card';

export default withTheme(class EuchreScorecards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      cardPositions: [
        {left: 0,   top: 0,    angle: 0 },
        {left: 0.1, top: 0.1,  angle: 45},
        {left: 0,   top: 0.35, angle: 0 },
        {left: 0.5, top: 0,    angle: 0 },
        {left: 0,   top: 0,    angle: 0 },
        {left: 0.1, top: 0.1,  angle: 45},
        {left: 0,   top: 0.35, angle: 0 },
        {left: 0.5, top: 0,    angle: 0 },
        {left: 0,   top: 0.65, angle: 0 },
        {left: 0.5, top: 0.5,  angle: 45},
        {left: 0.9, top: 0,    angle: 0 }
      ],
      slop: 0.1
    }
  }

  render() {
    const screenWidth = this.props.screenWidth || visualViewport.width * 0.95;
    const width = this.props.width;
    const cardWidth = screenWidth * width;
    const cardHeight = cardWidth * 1.4;
    const left = this.state.cardPositions[this.state.score].left + ((Math.random() - 0.5) * this.state.slop);
    const top = this.state.cardPositions[this.state.score].top + ((Math.random() - 0.5) * this.state.slop);
    const angle = this.state.cardPositions[this.state.score].angle + ((Math.random() - 0.5) * this.state.slop * 45);
    return (
      <div onClick={() => {this.setState(Object.assign({}, this.state, {score: (this.state.score + 1) % 11}))}} style={{
        position: 'absolute',
        top: this.props.top - cardHeight / 2,
        left: this.props.left - cardWidth / 2,
      }}>
        <Card card={`6${this.props.suit}`} width={cardWidth} />
        <Card card={`4${this.props.suit}`} faceDown={this.state.score <= 3} width={cardWidth}
              top={top * cardHeight} left={left * cardWidth}
              style={{transform: `rotate(${angle}deg)`}} />
      </div>
    );
  }

});
