import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Products extends Component {
  render() {
    const { name, image, price } = this.props;
    return (
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
    );
  }
}

Products.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
}.isRequired;

export default Products;
