import React from 'react';
import { withTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

import Hand from './Hand';
import TrumpPicker from './TrumpPicker';
import { orderHand } from '../euchreutils';

export default withTheme(class EuchrePlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trump: 'C',
      choosingTrump: true,
      disabledSuit: undefined,
      hand: ['QC', 'JS', 'AH', 'JC', 'QH'],
      selectedCard: undefined
    }
  }

  render() {
    const hand = this.state.hand;
    orderHand(hand, this.state.trump);
    return (
      <Grid container>
        <Grid item xs={this.state.callingUpTrump || this.state.choosingTrump ? 10 : 12} container alignItems="center" justify="center"
              style={{transition: this.props.theme.transitions.create("all", {
                easing: this.props.theme.transitions.easing.easeInOut, 
                duration: this.props.theme.transitions.duration.leavingScreen,
              })}} >
          <Hand cards={hand} activeCard={this.state.selectedCard} onSelect={(card) => {this.setState(Object.assign({}, this.state, {selectedCard: card}))}} />
        </Grid>
        {this.state.choosingTrump ? (
        <Fade in={true} style={{transitionDelay: this.props.theme.transitions.duration.leavingScreen}}>
          <Grid item xs={2} container alignItems="center" style={{transition: this.props.theme.transitions.create("all", {
            easing: this.props.theme.transitions.easing.easeInOut, 
            duration: this.props.theme.transitions.duration.leavingScreen,
          })}} >
            <TrumpPicker singleSuit={this.state.trump} disabledSuit={this.state.disabledSuit} onPass={() => {this.setState(Object.assign({}, this.state, {choosingTrump: false}))}} />
          </Grid>
        </Fade>
        ) : (null)}
      </Grid>
    );
  }

});
