import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    const { name, image, price, id } = this.props;
    return (
      <Link
        to={ `/ProductsDetails/${id}` }
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
