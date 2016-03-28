import Post = require('./post');

export = function applyTemplate(post:Post, category) {
	var template = `
	<div id="post_${post.id}" class="box grid">
		<div class="col-12">
			${post.title}
			${post.image ? `<img src=${post.image}>` : ''}
		</div>
		<div class="grid">
			<div class="col-12">${post.content}</div>
		</div>
	</div>
	<div class="grid box">
		<a href="#/posts/${category}">
			<div class="col-12">
				${category}
			</div>
		</a>
	</div>
	`;

	return template;
};