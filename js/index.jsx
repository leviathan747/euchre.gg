import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Main application start
(async function() {

  // only allow landscape orientation
  screen.orientation.lock('landscape');

  // render application
  ReactDOM.render(<App />, document.getElementById('root'));

})();
