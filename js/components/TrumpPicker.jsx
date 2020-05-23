import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

import TrumpSelection from './TrumpSelection';

export default function TrumpPicker(props) {
  const [trump, setTrump] = useState('');
  return (
    <Grid item container direction="column" alignItems="center" justify="center">
      {props.singleSuit ? (
      <Grid item>
        <div style={{width: '60%', paddingLeft: '20%'}}>
          <TrumpSelection suit={props.singleSuit} width="100%" />
        </div>
      </Grid>
      ) : (
      <Grid item>
        <div style={{width: '80%', paddingLeft: '10%'}}>
          <span style={{width: '48%', paddingRight: '4%'}}>
            <TrumpSelection suit="C" trump={trump} disabledSuit={props.disabledSuit} width="48%" onSelect={setTrump} />
          </span>
          <span style={{width: '48%'}}>
            <TrumpSelection suit="D" trump={trump} disabledSuit={props.disabledSuit} width="48%" onSelect={setTrump} />
          </span>
        </div>
        <div style={{width: '80%', paddingLeft: '10%'}}>
          <span style={{width: '48%', paddingRight: '4%'}}>
            <TrumpSelection suit="H" trump={trump} disabledSuit={props.disabledSuit} width="48%" onSelect={setTrump} />
          </span>
          <span style={{width: '48%'}}>
            <TrumpSelection suit="S" trump={trump} disabledSuit={props.disabledSuit} width="48%" onSelect={setTrump} />
          </span>
        </div>
      </Grid>
      )}
      <Grid item>
        <ButtonGroup orientation="vertical" variant="contained">
          <Button onClick={props.onPass}>Pass</Button>
          <Button disabled={!props.singleSuit && trump === ''}>Call up</Button>
          <Button disabled={!props.singleSuit && trump === ''}>Go alone</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
