import React from 'react';
import { withTheme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Chip from '@material-ui/core/Chip';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

import EuchreScorecards from './EuchreScorecards';
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
    // TODO handle dealer case
    const state = this.props.gameState;
    state.hand.turn = (state.hand.turn % 4) + 1;
    this.props.onGameStateChange(state);
  }

  onCallUp(suit, alone) {
    // TODO handle going alone
    const state = this.props.gameState;
    state.hand.trump = suit;
    if (state.hand.dealer !== this.props.player) {
      // if this is the dealer, they need to choose a discard otherwise the
      // turn advances to the player left of the deal to start main gameplay
      state.hand.turn = (state.hand.dealer % 4) + 1;
    }
    // add the top card to the dealer's hand
    if (state.hand.topCard) {
      state.hand.hands[this.props.gameState.hand.dealer-1].push(this.props.gameState.hand.topCard);
      state.hand.topCard = undefined;
    }
    this.props.onGameStateChange(state);
  }

  render() {
    const choosingTrump = !this.props.gameState.hand.trump && this.props.gameState.hand.turn === this.props.player;
    const hand = orderHand(this.props.gameState.hand.hands[this.props.player-1], this.props.gameState.hand.trump);
    const dealer = this.props.gameState.hand.dealer === this.props.player;
    const turn = this.props.gameState.hand.turn === this.props.player;
    return (
      <Grid container>
        <Grid item xs={12} container alignItems="center" justify="center"
              style={{transition: this.props.theme.transitions.create("all", {
                easing: this.props.theme.transitions.easing.easeInOut, 
                duration: this.props.theme.transitions.duration.leavingScreen,
              })}} >
          <EuchreScorecards suit="D" width={0.2} />
        </Grid>
      </Grid>
    );
    /*
    return (
      <Grid container>
        <Grid item xs={12} container alignItems="center" justify="flex-end">
          <Grid item>
            <Box pt={1} pr={1}>
              <div style={{height: 40}}></div>
            </Box>
          </Grid>
          {turn ? (
          <Grid item>
            <Box pt={1} pr={1}>
              <Chip label="your turn" />
            </Box>
          </Grid>
          ) : (null)}
          {this.props.gameState.hand.trump ? (
          <Grid item>
            <Box pt={1} pr={1}>
              <img height="40" src={`/euchre.gg/cards/${this.props.gameState.hand.trump}.svg`} />
            </Box>
          </Grid>
          ) : (null)}
          {dealer ? (
          <Grid item>
            <Box pt={1} pr={1}>
              <img height="40" src="/euchre.gg/images/dealer.svg" />
            </Box>
          </Grid>
          ) : (null)}
        </Grid>
        <Grid item xs={choosingTrump ? 10 : 12} container alignItems="center" justify="center"
              style={{transition: this.props.theme.transitions.create("all", {
                easing: this.props.theme.transitions.easing.easeInOut, 
                duration: this.props.theme.transitions.duration.leavingScreen,
              })}} >
          <Hand cards={hand} activeCard={this.state.selectedCard} onSelect={(card) => {this.setState(Object.assign({}, this.state, {selectedCard: card}))}} screenHeight={(visualViewport.height - 52) * 0.95} />
        </Grid>
        {choosingTrump ? (
        <Fade in={true} style={{transitionDelay: this.props.theme.transitions.duration.leavingScreen}}>
          <Grid item xs={2} container alignItems="center" style={{transition: this.props.theme.transitions.create("all", {
            easing: this.props.theme.transitions.easing.easeInOut, 
            duration: this.props.theme.transitions.duration.leavingScreen,
          })}} >
            <TrumpPicker topCard={this.props.gameState.hand.topCard} disabledSuit={this.props.gameState.hand.invalidSuit} onPass={this.onPass.bind(this)} onCallUp={this.onCallUp.bind(this)} />
          </Grid>
        </Fade>
        ) : (null)}
      </Grid>
    );
    */
  }

});
