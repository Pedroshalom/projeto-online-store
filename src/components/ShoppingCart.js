import React, { Component } from 'react';
import { readItens } from '../services/api';

class ShoppingCart extends Component {
  state = {
    cartItems: [],
  };

  componentDidMount() {
    const request = readItens();
    this.setState({ cartItems: request });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>

        { !cartItems
          ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)
          : cartItems.map((e) => (

        { cartItems.length
          ? cartItems.map((e) => (

            <div key={ e.id }>
              <h3 data-testid="shopping-cart-product-name">{e.title}</h3>
              <h4>{e.price}</h4>
              <h4 data-testid="shopping-cart-product-quantity">{e.quantity}</h4>
            </div>

      </div>
    );
  }
}
export default ShoppingCart;
