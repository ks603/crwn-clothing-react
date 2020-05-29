import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Homepage from './pages/homepage/homepage.component'

const Hats = () => {
  return (
    <div>
      <h1>hats</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
