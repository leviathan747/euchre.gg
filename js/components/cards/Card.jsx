import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const CARD_BACK = 'BLUE_BACK';

export default function Card(props) {
  const theme = useTheme();
  const cardFace = props.faceDown ? CARD_BACK : props.card;
  let cardStyle = {
    width: props.width,
    marginLeft: props.leftShift || 0,
    paddingTop: props.paddingTop || 0,
    paddingBottom: props.paddingBottom || 0,
    borderRadius: props.width * 0.044,
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeInOut, 
      duration: theme.transitions.duration.leavingScreen,
    })
  };
  cardStyle = Object.assign({}, cardStyle, props.style);
  const {faceDown, card, width, leftShift, paddingTop, paddingBottom, style, ...remainingProps} = props;
  return (
    <img src={`/euchre.gg/cards/${cardFace}.svg`} style={cardStyle} {...remainingProps} />
  );
}
