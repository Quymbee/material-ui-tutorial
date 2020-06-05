import React, { Fragment } from 'react';
import Home from './components/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume';
import { Route } from 'react-router-dom';
import './App.css';

/* Notes: 
CssBaseline --> no gaps / margin around screen for nav and things

*/

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
    </Fragment>
  );
}

export default App;
