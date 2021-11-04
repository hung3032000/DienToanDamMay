import Header from 'components/Header';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
