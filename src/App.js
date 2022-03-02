import React from 'react';
import Header from './Header';
import Home from './Home'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './Checkout'
import { StateProvider } from './StateProvider';
import { reducer, initialState } from './reducer';
import Login from './Login'


function App() {
  

  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <Router>
        <div className="app">

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App