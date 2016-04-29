import Post = require('../post');

export = function cardTemplate(post: Post, category) {
    return `
	<div id="post_${post.id}" class="cards-item">
		<div>
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