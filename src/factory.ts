
class Factory {
	collection: {};

	constructor(){
		this.collection = {};
	}

	resetActive() {
		var item;

		for (item in this.collection) {
			this.collection[item].active = false;
		}
	}
}

export = Factory;