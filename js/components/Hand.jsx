import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

export default withTheme(class Hand extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spacing: 0.6,
      width: 0.25,
      selectHeight: 0.2
    }
  }

  render() {
    const screenWidth = this.props.screenWidth || visualViewport.width * 0.95;
    const screenHeight = this.props.screenHeight || (visualViewport.height - 50) * 0.95;
    const spacing = this.props.spacing || this.state.spacing;
    const width = this.props.width || this.state.width;
    const selectHeight = this.props.selectHeight || this.state.selectHeight;
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
            width: screenWidth * width,
            marginLeft: i ? -(Math.floor(screenWidth * width * 1.4)) * (1.0 - spacing) : 0,
            paddingTop: ((screenHeight - Math.floor(screenWidth * width * 1.4)) / 3 * 2) - (this.props.activeCard === card ? screenWidth * width * selectHeight : 0),
            paddingBottom: ((screenHeight - Math.floor(screenWidth * width * 1.4)) / 3) + (this.props.activeCard === card ? screenWidth * width * selectHeight : 0),
            transition: this.props.theme.transitions.create("all", {
              easing: this.props.theme.transitions.easing.easeInOut, 
              duration: this.props.theme.transitions.duration.leavingScreen,
            })
          }} />)}
      </Grid>
    );
  }
});
