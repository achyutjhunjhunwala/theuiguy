import React, { Component, } from 'react';
import { Route, Switch, BrowserRouter, Redirect, } from 'react-router-dom';

import './App.css';

import Navigation from './components/navigation/navigation';
import CV from './components/cv/cv';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path={'/'} exact component={Navigation} />
            <Route path={'/cv'} exact component={CV} />
            <Redirect to={'/'} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
