import Api = require('../../api/api');
import Category = require('./category');

class CategoryApi extends Api{

	categories: Category[];

	constructor() {
		super('categories')
		this.categories = [];
	}

	getCategories() {
		return this.get({}, '');
	}

	resolveCategories() {
		this.getCategories()
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			this.createCategories(res);
		})
	}

	createCategories(rawCategories) {
		rawCategories.forEach((rawCategory) => {
			this.categories.push(
				new Category(
					rawCategories.id,
					rawCategories.name));
		});
	}
}

export = CategoryApi;