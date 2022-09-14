import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveItens, readItens, getProductById } from '../services/api';

class ProductDetails extends Component {
  state = {
    productsList: {},
  };

  componentDidMount() {
    this.handleProductDetails();
  }

  handleProductDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const details = await getProductById(id);
    console.log(details);
    this.setState({
      productsList: details,
    });
  };

  saveLocalStorage = (product) => {
    product.quantity = 1;
    const shoppingCart = readItens() || [];
    if (shoppingCart.some((element) => element.id === product.id)) {
      const shoppingCart2 = shoppingCart.map((element) => {
        if (element.id === product.id) {
          element.quantity += 1;
        }
        return element;
      });
      saveItens(shoppingCart2);
    } else {
      saveItens([...shoppingCart, product]);
    }
    // console.log(shoppingCart);
    // console.log(shoppingCart2);
  };

  render() {
    const { productsList: { title, price, thumbnail }, productsList } = this.state;
    return (
      <>
        <div data-testid="product">
          <p data-testid="product-detail-name">{ title }</p>
          <img
            data-testid="product-detail-image"
            src={ thumbnail }
            alt={ title }
          />
          <p data-testid="product-detail-price">{`Preço: ${price}`}</p>
        </div>
        <Link to="/ShoppingCart" data-testid="shopping-cart-button">
          Voltar para carrinho
        </Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.saveLocalStorage(productsList) }
        >
          Adicionar ao carrinho
        </button>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
