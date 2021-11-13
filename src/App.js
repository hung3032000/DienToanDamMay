import Header from 'components/Header';
import ProductFeature from 'features/Product';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
// import CounterFeature from './features/Counter';

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Redirect from="/home" to="/products" exact />
        <Redirect from="/" to="/products" exact />
        {/* <Route path="/" component={CounterFeature} exact /> */}

        <Route path="/products" component={ProductFeature} />
  

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
