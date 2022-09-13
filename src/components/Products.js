import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    const { name, image, price, id } = this.props;
    return (
      <Link
        to={ `/ProductDetails/${id}` }
        data-testid="product-detail-link"
      >
        <div
          data-testid="product"
        >
          <h3>
            { name }
          </h3>
          <img src={ image } alt={ name } />
          <h4>
            { price }
          </h4>
          <Link to="/shoppingCart">
            <button
              type="button"
              data-testid="product-add-to-cart"
              // onClick={ this.addToCartButton }
            >
              Adicionar ao carrinho
            </button>
          </Link>
        </div>
      </Link>
    );
  }
}

Products.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
}.isRequired;

export default Products;
