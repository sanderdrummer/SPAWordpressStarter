import View = require('../view');

class Post extends View{

	id: number;
	title: string;
	content: string;
	excerpt: string;
	elem: Element;
	template: string;

	constructor(config: any){
		super();
		this.id = config && config.id || '';
		this.title = config && config.title || '';
		this.content = config && config.content || '';
		this.excerpt = config && config.excerpt || '';
	}


}

export = Post;