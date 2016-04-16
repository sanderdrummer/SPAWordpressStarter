import Post = require('./post');

function getDefault(post: Post, category) {
	return `
	<div id="post_${post.id}" class="box">
		<div class="grid">
			<div class="col-12">
				<a href="#/post/${category}/${post.id}">
				<h2 class="hug">
					${post.title}
				</h2>	
				${post.image ? `<img src=${post.image}>` : ''}
				</a> 
			</div>
		</div>
		<div class="grid">
			<div class="col-12">
				${post.excerpt}
				<a href="#/post/${category}/${post.id}">
					mehr lesen
				</a> 
			</div>
		</div>
	</div>
	`;
}

function getCards(post: Post, category) {
	return `
	<div id="post_${post.id}" class="cards-item">
		<div class="col-12">
			<h2 class="hug">
				${post.title}
			</h2>	
			<a href="#/post/${category}/${post.id}">
			${post.image ? `<img src=${post.image}>` : ''}
			</a> 
		</div>
				${post.excerpt}
				<a href="#/post/${category}/${post.id}">
					mehr lesen
				</a> 
	</div>
	`;
}


export = function applyTemplate(post:Post, category) {
	var template;
	switch (category) {
		case 'gigs':
			template = getCards(post, category)
			break;
		
		default:
			template = getDefault(post, category);
			break;
	}
	

	return template;
};