export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = await data.json();
  return response;
}

export async function getProductById(id) {
  const data = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const response = await data.json();
  return response;
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}

export function saveItens(product) {
  localStorage.setItem('cartItem', JSON.stringify(product));
}

export function readItens() {
  return JSON.parse(localStorage.getItem('cartItem'));
}
