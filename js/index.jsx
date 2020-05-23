import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Main application start
(async function() {

  // register service worker if necessary
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.register('/euchre.gg/service-worker.js');
      console.log('ServiceWorker registration successful with scope: ', reg.scope);

    } catch (err) {
      console.error(err.message, err);
    }
  }
  // render application
  ReactDOM.render(<App />, document.getElementById('root'));

})();
