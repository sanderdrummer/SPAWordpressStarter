import Post = require('./post');

export = function applyTemplate(post:Post) {
	var template = `
	<div class="grid center">
		<div class="col-5">${post.title}</div>
	</div>
	<div class="grid center">
		<div class="col-5">${post.excerpt}</div>
		<div class="col-5 hidden">${post.content}</div>
	</div>
	`;

	return template;
};