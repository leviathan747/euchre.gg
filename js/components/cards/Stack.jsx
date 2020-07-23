import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from './Card';

export default function Stack(props) {
  const [cardPositions, setCardPositions] = useState([]);
  const theme = useTheme();
  const screenWidth = props.screenWidth || visualViewport.width * 0.95;
  const width = props.width;
  const cardWidth = screenWidth * width;
  const cardHeight = cardWidth * 1.4;
  const hRange = props.hRange || 0;
  const vRange = props.vRange || 0;
  const rRange = props.rRange || 0;
  const cards = props.cards || [];
  const newCardPositions = [];
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
      {cards.map((card, i) => {
        let left = 0;
        let top = 0;
        let angle = 0;
        console.log(cardPositions, cards);
        if (cardPositions.length === cards.length) {
          left = cardPositions[i].left;
          top = cardPositions[i].top;
          angle = cardPositions[i].angle;
        } else {
          left = -(hRange / 2) + (Math.random() * hRange);
          top = -(vRange / 2) + (Math.random() * vRange);
          angle = Math.random() * rRange;
          newCardPositions.push({left: left, top: top, angle: angle});
          setCardPositions(newCardPositions);
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
