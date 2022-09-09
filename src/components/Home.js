import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Products from './Products';

class Home extends Component {
  state = {
    category: '',
    input: '',
    productsList: [],
    searchResults: [],
  };

  componentDidMount() {
    this.handleCategories();
  }

  handleCategories = async () => {
    const productsList = await getCategories();
    this.setState({ productsList });
  };

  handleClick = async () => {
    const { category, input } = this.state;
    const {
      results: searchResults,
    } = await getProductsFromCategoryAndQuery(category, input);
    console.log(searchResults);
    this.setState({
      searchResults,
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      input: target.value,
    });
  };

  render() {
    const { productsList, searchResults } = this.state;
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        {
          searchResults.length === 0 ? (<h3>Nenhum produto foi encontrado</h3>)
            : (searchResults
              .map((product) => (
                <Products
                  data-testid="product"
                  key={ product.id }
                  name={ product.title }
                  img={ product.thumbnail }
                  price={ product.price }
                />
              )))
        }
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
