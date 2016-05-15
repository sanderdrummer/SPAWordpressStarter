import Post = require('../post');

export = function cardTemplate(post: Post, category) {
    return `
	<div id="post_${post.id}" class="cards-item">
		<a href="#/post/${category}/${post.id}">
			<div>
				<h2 class="hug">
					${post.title}
				</h2>	
				${post.image ? `<img src=${post.image}>` : ''}
			</div>
			${post.excerpt}
		</a>
	</div>
	`;
}