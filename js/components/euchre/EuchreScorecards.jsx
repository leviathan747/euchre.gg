import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from '../cards/Card';

export default withTheme(class EuchreScorecards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardPositions: [
        {left: 0,    top: 0,    angle: 0 },
        {left: 0.15, top: 0.15, angle: 45},
        {left: 0,    top: 0.35, angle: 0 },
        {left: 0.5,  top: 0,    angle: 0 },
        {left: 0,    top: 0,    angle: 0 },
        {left: 0.15, top: 0.15, angle: 45},
        {left: 0,    top: 0.35, angle: 0 },
        {left: 0.5,  top: 0,    angle: 0 },
        {left: 0,    top: 0.65, angle: 0 },
        {left: 0.5,  top: 0.5,  angle: 45},
        {left: 0.9,  top: 0,    angle: 0 }
      ],
      slop: 0.1
    };
    this.offset = {left: 0, top: 0, angle: 0};
    this.score = -1;
  }

  render() {
    const score = this.props.score % 11;
    const anchor = this.props.anchor || 'top left';
    const screenWidth = this.props.screenWidth || visualViewport.width * 0.95;
    const width = this.props.width;
    const cardWidth = screenWidth * width;
    const cardHeight = cardWidth * 1.4;
    if (score !== this.score) {
      this.offset.left = this.state.cardPositions[score].left + ((Math.random() - 0.5) * this.state.slop);
      this.offset.top = this.state.cardPositions[score].top + ((Math.random() - 0.5) * this.state.slop);
      this.offset.angle = this.state.cardPositions[score].angle + ((Math.random() - 0.5) * this.state.slop * 45);
      this.score = score;
    }
    const scorecardLeftAdjust = anchor.includes('right') ? Math.max(0, this.offset.left * cardWidth) : 0;
    const scorecardTopAdjust = anchor.includes('bottom') ? Math.max(0, this.offset.top * cardHeight) : 0; 
    return (
      <div style={{
        position: 'relative',
        top: this.props.top - scorecardTopAdjust,
        left: this.props.left - scorecardLeftAdjust,
        transition: this.props.theme.transitions.create("all", {
          easing: this.props.theme.transitions.easing.easeInOut, 
          duration: this.props.theme.transitions.duration.leavingScreen,
        })
      }}>
        <Card card={`6${this.props.suit}`} width={cardWidth} />
        <Card card={`4${this.props.suit}`} faceDown={score <= 3} width={cardWidth}
              top={this.offset.top * cardHeight} left={this.offset.left * cardWidth}
              style={{transform: `rotate(${this.offset.angle}deg)`}} />
      </div>
    );
  }

});
