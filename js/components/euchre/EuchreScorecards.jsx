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
        {left: 0,    top: 0,    angle: 0 },
        {left: 0.15, top: 0.15, angle: 45},
        {left: 0,    top: 0.3,  angle: 0 },
        {left: 0.5,  top: 0,    angle: 0 },
        {left: 0,    top: 0,    angle: 0 },
        {left: 0.15, top: 0.15, angle: 45},
        {left: 0,    top: 0.3,  angle: 0 },
        {left: 0.5,  top: 0,    angle: 0 },
        {left: 0,    top: 0.65, angle: 0 },
        {left: 0.7,  top: 0.7,  angle: 45},
        {left: 0.9,  top: 0,    angle: 0 }
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
      <Grid item onClick={() => {this.setState(Object.assign({}, this.state, {score: (this.state.score + 1) % 11}))}} >
        <Card card={`6${this.props.suit}`} width={cardWidth} paddingTop={top >= 0 ? 0 : -top * cardHeight} paddingBottom={top >= 0 ? top * cardHeight : 0} />
        <Card card={`4${this.props.suit}`} faceDown={this.state.score <= 3} width={cardWidth} leftShift={-cardWidth + left * cardWidth}
              paddingTop={top >= 0 ? top * cardHeight : 0} paddingBottom={top >= 0 ? 0 : -top * cardHeight} style={{transform: `rotate(${angle}deg)`}} />
      </Grid>
    );
  }

});
