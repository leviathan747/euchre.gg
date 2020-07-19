import React, {useState} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';

export default function GameControls(props) {
  const [drawerOpen, setDrawerOpen] = useState();
  return (
    <Container maxWidth={false} disableGutters>

      {/* user avatar */}
      <Grid container spacing={1}>
        <Grid item>
          <Avatar src="/euchre.gg/images/avatar.jpg" onClick={() => {setDrawerOpen(true)}} />
        </Grid>
      </Grid>

      {/* control drawer */}
      <Drawer open={drawerOpen} onClose={() => {setDrawerOpen(false)}}>
      Hello world
      </Drawer>

    </Container>
  );
}
