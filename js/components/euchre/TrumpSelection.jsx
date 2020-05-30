import React from 'react';

import Card from '../cards/Card';

export default function TrumpSelection(props) {
  const highlight = 'rgba(255, 255, 0, 1) 0 0 10px';
  const disable = 'grayscale(100%) contrast(50%)'
  const card = props.card || `A${props.suit}`;
  return (
    <Card card={card} width={props.width} style={{
            boxShadow: props.trump === props.suit && props.disabledSuit !== props.suit ? highlight : 'none',
            filter: !props.card && props.disabledSuit === props.suit ? disable : 'none'
          }}
          onClick={() => {
            if (props.onSelect && props.disabledSuit !== props.suit) {
              props.onSelect(props.suit);
            }
          }} />
  );
}
