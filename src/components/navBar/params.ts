class Params {
	id: number;
	category: string;

	constructor(config:any) {
		this.id config.id || 0;
		this.category config.category || '';
	}
}