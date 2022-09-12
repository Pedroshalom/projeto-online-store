import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

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

  render() {
    const { productsList: { title, price, thumbnail } } = this.state;
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
