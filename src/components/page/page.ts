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
		this.title = config && config.title && config.title.rendered || '';
		this.content = config && config.content && 
			config.content.rendered || '';
		this.image = config && config.featured_media || '';

	}


}

export = Page;