import Post = require('./post');

export = function applyTemplate(post:Post, category) {
	var template = `
	<div id="post_${post.id}">
		<div class="grid center">
			<div class="col-5"><a href="#/post/${category}/${post.id}">${post.title}</a> </div>
		</div>
		<div class="grid center">
			<div class="col-5">${post.excerpt}</div>
			<div class="col-5 hidden">${post.content}</div>
		</div>
	</div>
	`;

	return template;
};