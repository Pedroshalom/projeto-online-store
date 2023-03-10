import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            component={ Home }
          />
          <Route
            exact
            path="/shoppingCart"
            component={ ShoppingCart }
          />
          <Route
            exact
            path="/ProductDetails/:id"
            component={ ProductDetails }
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
