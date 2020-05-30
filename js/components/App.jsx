import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import EuchreGame from './euchre/EuchreGame';
import EuchrePlayer from './euchre/EuchrePlayer';
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
        <EuchreGame />
      </Table>
    </ThemeProvider>
  );
}
