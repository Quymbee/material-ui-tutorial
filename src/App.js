import React, { Fragment } from 'react';
import Home from './components/index';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

/* Notes: 
CssBaseline --> no gaps / margin around screen for nav and things

*/

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Home />
    </Fragment>
  );
}

export default App;
