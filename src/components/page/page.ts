import View = require('../view');

class Page extends View{

	id: number;
	title: string;
	content: string;
	image: string;
	elem: Element;
	template: string;

	constructor(config: any){
		super();
		this.id = config && config.id || '';
		this.title = config && config.title || '';
		this.content = config && config.content || '';
		this.image = config && config.image || '';

	}


}

export = Page;