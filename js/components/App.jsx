import React from 'react';

import EuchrePlayer from './EuchrePlayer';
import Table from './Table';

export default function App(props) {
  return (
    <Table>
      <EuchrePlayer />
    </Table>
  );
}
