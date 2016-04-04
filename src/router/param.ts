class Param {
	id: number;
	category: string;
	page: number;

	constructor(config:any) {
		this.id = config.id || 0;
		this.category = config.category || '';
		this.page = config.page || 1;
	}
}

export = Param;