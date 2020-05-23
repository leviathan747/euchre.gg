import React from 'react';
import { withTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

import Hand from './Hand';
import TrumpPicker from './TrumpPicker';

export default withTheme(class EuchrePlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      choosingTrump: true,
      disabledSuit: undefined,
      singleSuit: undefined,
      hand: ['JS', 'JC', 'AS', 'KS', 'QS'],
      selectedCard: undefined
    }
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={this.state.callingUpTrump || this.state.choosingTrump ? 10 : 12} container alignItems="center" justify="center"
              style={{transition: this.props.theme.transitions.create("all", {
                easing: this.props.theme.transitions.easing.easeInOut, 
                duration: this.props.theme.transitions.duration.leavingScreen,
              })}} >
          <Hand cards={this.state.hand} activeCard={this.state.selectedCard} onSelect={(card) => {this.setState(Object.assign({}, this.state, {selectedCard: card}))}} />
        </Grid>
        {this.state.choosingTrump ? (
        <Fade in={true} style={{transitionDelay: this.props.theme.transitions.duration.leavingScreen}}>
          <Grid item xs={2} container alignItems="center" style={{transition: this.props.theme.transitions.create("all", {
            easing: this.props.theme.transitions.easing.easeInOut, 
            duration: this.props.theme.transitions.duration.leavingScreen,
          })}} >
            <TrumpPicker singleSuit={this.state.singleSuit} disabledSuit={this.state.disabledSuit} onPass={() => {this.setState(Object.assign({}, this.state, {choosingTrump: false}))}} />
          </Grid>
        </Fade>
        ) : (null)}
      </Grid>
    );
  }

});
