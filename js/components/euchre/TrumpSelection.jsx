import React from 'react';

export default function TrumpSelection(props) {
  const highlight = 'rgba(255, 255, 0, 1) 0 0 10px';
  const disable = 'grayscale(100%) contrast(50%)'
  const card = props.card || `A${props.suit}`;
  return (
    <img src={`/euchre.gg/cards/${card}.svg`} style={{
           width: props.width,
           borderRadius: '2px',
           boxShadow: props.trump === props.suit && props.disabledSuit !== props.suit ? highlight : 'none',
           filter: !props.card && props.disabledSuit === props.suit ? disable : 'none'
         }} onClick={() => {
           if (props.onSelect && props.disabledSuit !== props.suit) {
             props.onSelect(props.suit);
           }
         }}
    />
  );
}
