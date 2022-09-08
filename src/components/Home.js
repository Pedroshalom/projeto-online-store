import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ShoppingCart from './ShoppingCart';

class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        {/* <button
          type="button"
          data-testid="shopping-cart-button"
          to="/shoppingCart"
        >
          Seu carrinho está vazio

        </button> */}
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingCart"
        >
          {' '}
          Carrinho de Compras

        </Link>
      </div>
    );
  }
}

export default Home;
