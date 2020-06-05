import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as ServiceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

ServiceWorker.register();
