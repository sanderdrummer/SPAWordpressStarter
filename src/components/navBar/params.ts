class Params {
	id: number;
	category: string;

	constructor(config:Object) {
		this.id config.id || 0
		this.category config.category || ''
	}
}