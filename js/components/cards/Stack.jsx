import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from './Card';

export default function Stack(props) {
  const theme = useTheme();
  const screenWidth = props.screenWidth || visualViewport.width * 0.95;
  const width = props.width;
  const cardWidth = screenWidth * width;
  const cardHeight = cardWidth * 1.4;
  const hRange = props.hRange || 0;
  const vRange = props.vRange || 0;
  const rRange = props.rRange || 0;
  const cards = props.cards || [];
  return (
    <div style={{
      position: 'relative',
      top: props.top,
      left: props.left,
      transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.easeInOut, 
        duration: theme.transitions.duration.leavingScreen,
      })
    }}>
      {cards.map((card) => {
        const left = -(hRange / 2) + (Math.random() * hRange);
        const top = -(vRange / 2) + (Math.random() * vRange);
        const angle = Math.random() * rRange;
        return (
          <Card card={card.cardFace || card} faceDown={card.faceDown} width={cardWidth}
            top={top * cardHeight} left={left * cardWidth}
            style={{transform: `rotate(${angle}deg)`}} />
        );
      })}
    </div>
  );
}
