import React, { Component } from 'react';
import { saveItens, readItens } from '../services/api';

class ShoppingCart extends Component {
  state = {
    cartItems: [],
  };

  componentDidMount() {
    const request = readItens();
    this.setState({ cartItems: request || [] });
  }

  incrementQuantity = (productId) => {
    const items = readItens();

    const atualizado = items.map((item) => {
      if (item.id === productId) {
        item.quantity += 1;
      }
      return item;
    });

    saveItens(atualizado);
    this.setState({ cartItems: atualizado });
  };

  decrementQuantity = (productId) => {
    const items = readItens();

    const atualizado = items.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });

    saveItens(atualizado);
    this.setState({ cartItems: atualizado });
  };

  removeItemInCart(productId) {
    const items = readItens();

    const atualizado = items.filter((item) => item.id !== productId);
    saveItens(atualizado);
    this.setState({ cartItems: atualizado });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        { cartItems.length
          ? cartItems.map((e) => (
            <div key={ e.id }>
              <h3 data-testid="shopping-cart-product-name">{e.title}</h3>
              <h4>{e.price}</h4>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.decrementQuantity(e.id) }
              >
                -

              </button>
              <h4 data-testid="shopping-cart-product-quantity">{e.quantity}</h4>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.incrementQuantity(e.id) }
              >
                +

              </button>
              <button
                type="button"
                data-testid="remove-product"
                onClick={ () => this.removeItemInCart(e.id) }
              >
                Remover do Carrinho

              </button>
              <h4 data-testid="shopping-cart-product-quantity">{e.quantity}</h4>

            </div>
          ))
          : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)}
      </div>
    );
  }
}
export default ShoppingCart;
