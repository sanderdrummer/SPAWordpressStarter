
class Factory {
	collection: {};

	constructor(){
		this.collection = {};
	}

	resetActive() {
		var item;

		for (item in this.collection) {
			this.collection[item].active = false;
            if (this.collection[item].paging) {
                this.collection[item].paging.hidePaging();
            }
		}
	}
}

export = Factory;