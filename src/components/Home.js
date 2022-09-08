import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends Component {
  state = {
    productsList: [],
  };

  componentDidMount() {
    this.handleCategories();
  }

  handleCategories = async () => {
    const productsList = await getCategories();
    this.setState({ productsList });
  };

  render() {
    const { productsList } = this.state;
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <Link
          data-testid="shopping-cart-button"
          to="/shoppingCart"
        >
          {' '}
          Carrinho de Compras

        </Link>
        {productsList.map((category) => (
          <label
            key={ category.id }
            htmlFor="radio-button"
            data-testid="category"
          >
            <input type="radio" />
            {category.name}
          </label>
        ))}
      </div>
    );
  }
}

export default Home;
