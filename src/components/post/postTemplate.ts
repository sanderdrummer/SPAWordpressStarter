import Post = require('./post');

export = function applyTemplate(post:Post, category) {
	var template = `
	<div id="post_${post.id}" class="box">
		<div class="grid">
		<div class="col-12">
			<h2 class="serif hug">${post.title}</h2>
			${post.image ? `<img src=${post.image}>` : ''}
		</div>
		</div>
		<div class="grid">
			<div class="col-12">${post.content}</div>
		</div>
	</div>
	<a href="#/posts/${category}">
		<div class="box">
			${category}
		</div>
	</a>
	`;

	return template;
};