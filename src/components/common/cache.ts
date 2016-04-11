export = {

	generateKey: function(obj:Object, url:string) {
		var key;
		var generatedKey = url + this.index;

		for (key in obj) {
			generatedKey += obj[key];
		}

		this.index += 1;

		return generatedKey;
	}
}