import React from 'react';

import EuchreGame from './EuchreGame';
import EuchrePlayer from './EuchrePlayer';
import Table from './Table';

export default function App(props) {
  return (
    <Table>
      <EuchreGame />
    </Table>
  );
}
