import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import EuchreGame from './euchre/EuchreGame';
import EuchrePlayer from './euchre/EuchrePlayer';
import Game from './Game';
import GameControls from './game/GameControls';
import Table from './cards/Table';

const theme = createMuiTheme({
  palette: {
    action: {
      disabledBackground: 'rgba(160, 160, 160, 1)'
    }
  }
});

export default function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Table>
        <Game game={EuchreGame} />
      </Table>
      <GameControls />
    </ThemeProvider>
  );
}
