import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const CARD_BACK = 'BLUE_BACK';

export default function Card(props) {
  const theme = useTheme();
  let divStyle = {
    display: 'inline-block',
    width: props.width,
    marginLeft: props.leftShift || 0,
    paddingTop: props.paddingTop || 0,
    paddingBottom: props.paddingBottom || 0,
    borderRadius: props.width * 0.044,
    perspective: 1000,
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeInOut, 
      duration: theme.transitions.duration.leavingScreen,
    })
  };
  divStyle = Object.assign({}, divStyle, props.style);
  const imgStyle = {
    position: 'absolute',
    width: '100%',
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
  const {faceDown, card, width, leftShift, paddingTop, paddingBottom, style, ...remainingProps} = props;
  return (
    <div style={divStyle}>
      <div style={{position: 'relative', width: '100%', height: '100%'}}>
        <img src={`/euchre.gg/cards/${CARD_BACK}.svg`} style={backStyle} />
        <img src={`/euchre.gg/cards/${props.card}.svg`} style={frontStyle} />
      </div>
    </div>
  );
}
