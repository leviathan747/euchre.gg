import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export default class Hand extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spacing: 0.6,
      width: 0.25,
      cards: ['AS', 'KS', 'QS', 'JS', '10S']
    }
  }

  render() {
    console.log('rerender');
    return (
      <Grid item>
        <div>
          {this.state.cards.map((card, i) => <img src={`/euchre.gg/cards/${card}.svg`} style={{
            width: screen.width * this.state.width,
            marginLeft: i ? -(Math.floor(screen.width * this.state.width * 1.4)) * (1.0 - this.state.spacing) : 0,
            paddingTop: (screen.height - Math.floor(screen.width * this.state.width * 1.4)) / 2
          }} />)}
        </div>
      </Grid>
    );
  }
}
