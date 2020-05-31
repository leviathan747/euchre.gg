import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const CARD_BACK = 'BLUE_BACK';

export default function Card(props) {
  const theme = useTheme();
  let divStyle = {
    display: 'block',
    position: 'absolute',
    top: props.top,
    left: props.left,
    width: props.width,
    height: props.width * 1.4,
    borderRadius: props.width * 0.044,
    perspective: 1000,
    transformOrigin: 'center center',
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeInOut, 
      duration: theme.transitions.duration.leavingScreen,
    })
  };
  divStyle = Object.assign({}, divStyle, props.style);
  const imgStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeInOut, 
      duration: theme.transitions.duration.leavingScreen,
    })
  };
  const frontStyle = Object.assign({}, imgStyle, {transform: props.faceDown ? 'rotateY(-180deg)' : 'none'});
  const backStyle = Object.assign({}, imgStyle, {transform: props.faceDown ? 'none' : 'rotateY(180deg)'});
  const {faceDown, card, width, top, left, style, ...remainingProps} = props;
  return (
    <div style={divStyle}>
      <img src={`/euchre.gg/cards/${CARD_BACK}.svg`} style={backStyle} />
      <img src={`/euchre.gg/cards/${props.card}.svg`} style={frontStyle} />
    </div>
  );
}
