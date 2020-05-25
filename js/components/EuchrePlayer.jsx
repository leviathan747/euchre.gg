import React from 'react';
import { withTheme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Chip from '@material-ui/core/Chip';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

import Hand from './Hand';
import TrumpPicker from './TrumpPicker';
import { orderHand } from '../euchreutils';

export default withTheme(class EuchrePlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCard: undefined
    }
  }

  onPass() {
    const state = this.props.gameState;
    // TODO handle dealer case
    state.hand.turn = (state.hand.turn + 1) % 4;
    this.props.onGameStateChange(state);
  }

  render() {
    const choosingTrump = !this.props.gameState.hand.trump && this.props.gameState.hand.turn === this.props.player;
    const hand = orderHand(this.props.gameState.hand.hands[this.props.player-1], this.props.gameState.hand.trump);
    const dealer = this.props.gameState.hand.dealer === this.props.player;
    const turn = this.props.gameState.hand.turn === this.props.player;
    return (
      <Grid container>
        <Grid item xs={12} container justify="flex-end">
          {turn ? (
          <Grid item>
            <Box pt={1} pr={1}>
              <Chip label="your turn" style={{height: 40}} />
            </Box>
          </Grid>
          ) : (null)}
          {dealer ? (
          <Grid item>
            <Box pt={1} pr={1}>
              <img height="40" width="40" src="/euchre.gg/images/dealer.svg" />
            </Box>
          </Grid>
          ) : (null)}
        </Grid>
        <Grid item xs={choosingTrump ? 10 : 12} container alignItems="center" justify="center"
              style={{transition: this.props.theme.transitions.create("all", {
                easing: this.props.theme.transitions.easing.easeInOut, 
                duration: this.props.theme.transitions.duration.leavingScreen,
              })}} >
          <Hand cards={hand} activeCard={this.state.selectedCard} onSelect={(card) => {this.setState(Object.assign({}, this.state, {selectedCard: card}))}} />
        </Grid>
        {choosingTrump ? (
        <Fade in={true} style={{transitionDelay: this.props.theme.transitions.duration.leavingScreen}}>
          <Grid item xs={2} container alignItems="center" style={{transition: this.props.theme.transitions.create("all", {
            easing: this.props.theme.transitions.easing.easeInOut, 
            duration: this.props.theme.transitions.duration.leavingScreen,
          })}} >
            <TrumpPicker topCard={this.props.gameState.hand.topCard} disabledSuit={this.props.gameState.hand.invalidSuit} onPass={this.onPass.bind(this)} />
          </Grid>
        </Fade>
        ) : (null)}
      </Grid>
    );
  }

});
