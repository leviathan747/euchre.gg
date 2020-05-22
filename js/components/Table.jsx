import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const style = {
  position: 'fixed',
  padding: '0',
  margin: '0',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundImage: 'url(\'/images/table.jpg\')',
  backgroundColor: 'green',
  zIndex: -1
};

export default function Table(props) {
  return (
    <div>
      <div style={style}>
      </div>
      <Container maxWidth={false} disableGutters>
        <Grid container alignItems="center" justify="center" height={411}>
          {props.children}
        </Grid>
      </Container>
    </div>
  );
}
