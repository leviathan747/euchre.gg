import React from 'react';
import { withTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from './Card';

export default withTheme(class Stack extends React.Component {

  constructor(props) {
    super(props);
    this.cardPositions = [];
  }

  render() {
    const screenWidth = this.props.screenWidth || visualViewport.width * 0.95;
    const width = this.props.width;
    const cardWidth = screenWidth * width;
    const cardHeight = cardWidth * 1.4;
    const hRange = this.props.hRange || 0;
    const vRange = this.props.vRange || 0;
    const rRange = this.props.rRange || 0;
    const cards = this.props.cards || [];
    this.cardPositions = this.cardPositions.slice(0, cards.length);
    return (
      <div style={{
        position: 'relative',
        top: this.props.top,
        left: this.props.left,
        transition: this.props.theme.transitions.create("all", {
          easing: this.props.theme.transitions.easing.easeInOut, 
          duration: this.props.theme.transitions.duration.leavingScreen,
        })
      }}>
        {cards.map((card, i) => {
          let left = 0;
          let top = 0;
          let angle = 0;
          if (i >= this.cardPositions.length) {
            left = -(hRange / 2) + (Math.random() * hRange);
            top = -(vRange / 2) + (Math.random() * vRange);
            angle = Math.random() * rRange;
            this.cardPositions.push({left: left, top: top, angle: angle});
          } else {
            left = this.cardPositions[i].left;
            top = this.cardPositions[i].top;
            angle = this.cardPositions[i].angle;
          }
          return (
            <Card card={card.cardFace || card} faceDown={card.faceDown} width={cardWidth}
              top={top * cardHeight} left={left * cardWidth}
              style={{transform: `rotate(${angle}deg)`}} />
          );
        })}
      </div>
    );
  }

});
