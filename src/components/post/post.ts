class Post {

	id: number;
	title: string;
	content: string;
	excerpt: string;

	constructor(config: any){
		this.id = config && config.id || '';
		this.title = config && config.title || '';
		this.content = config && config.content || '';
		this.excerpt = config && config.excerpt || '';
	}
}

export = Post;