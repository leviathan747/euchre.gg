import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

export default withTheme(class Hand extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spacing: 0.6,
      width: 0.25,
    }
  }

  render() {
    return (
      <Grid item>
        {this.props.cards.map((card, i) => <img src={`/euchre.gg/cards/${card}.svg`} 
          onClick={() => {
            if (card === this.props.activeCard) {
              this.props.onSelect();
            }
            else {
              this.props.onSelect(card);
            }
          }}
          style={{
            width: screen.width * this.state.width,
            marginLeft: i ? -(Math.floor(screen.width * this.state.width * 1.4)) * (1.0 - this.state.spacing) : 0,
            paddingTop: (screen.height - Math.floor(screen.width * this.state.width * 1.4)) / 4 * (this.props.activeCard === card ? 1 : 2),
            paddingBottom: (screen.height - Math.floor(screen.width * this.state.width * 1.4)) / 4 * (this.props.activeCard === card ? 3 : 2),
            transition: this.props.theme.transitions.create("all", {
              easing: this.props.theme.transitions.easing.easeInOut, 
              duration: this.props.theme.transitions.duration.leavingScreen,
            })
          }} />)}
      </Grid>
    );
  }
});
