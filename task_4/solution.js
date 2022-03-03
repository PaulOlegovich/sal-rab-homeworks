// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON
	let data = JSON.parse(json);
	let product = data.products;
	return product;
}

function renderProductsCards(json){
	    clearProducts();
		let products = parseProducts(json);
		let length = products.length;
		for (let i = 0; i < length; i += 1) {
			addProduct(products[i]);
		}
}