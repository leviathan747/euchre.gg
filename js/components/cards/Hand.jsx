import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from './Card';

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
    const screenHeight = this.props.screenHeight || visualViewport.height * 0.95;
    const spacing = this.props.spacing || this.state.spacing;
    const width = this.props.width || this.state.width;
    const cardWidth = screenWidth * width;
    const cardHeight = cardWidth * 1.4;
    return (
      <Grid item>
        {this.props.cards.map((card, i) => <Card card={card} 
          width={cardWidth} leftShift={i ? -cardHeight * (1.0 - spacing) : 0}
          paddingTop={this.props.activeCard === card ? 0 : ((screenHeight - cardHeight) / 4 * 3)}
          paddingBottom={this.props.activeCard === card ? (screenHeight - cardHeight) : ((screenHeight - cardHeight) / 4 * 1)}
          onClick={() => {
            if (card === this.props.activeCard) {
              this.props.onSelect();
            }
            else {
              this.props.onSelect(card);
            }
          }} />)}
      </Grid>
    );
  }
});
