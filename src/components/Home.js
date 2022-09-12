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
    this.setState({
      searchResults,
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      input: target.value,
    });
  };

  filterCategories = async ({ target }) => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${target.id}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      searchResults: data.results,
    });
    console.log(data);
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
            htmlFor={ category.id }
            data-testid="category"
          >
            <input
              type="radio"
              id={ category.id }
              onChange={ this.filterCategories }
            />
            {category.name}
          </label>
        ))}
        {
          searchResults.length === 0 ? (<h3>Nenhum produto foi encontrado</h3>)
            : (searchResults
              .map((product) => (
                <Products
                  // data-testid="product"
                  key={ product.id }
                  id={ product.id }
                  name={ product.title }
                  image={ product.thumbnail }
                  price={ product.price }
                />
              )))
        }
      </div>
    );
  }
}

export default Home;
