import Post = require('./post');

export = function applyTemplate(post:Post, category) {
	var template = `
	<div id="post_${post.id}" class="box">
		<div class="grid">
			<div class="col-12">
				<a href="#/post/${category}/${post.id}">
				<h1 class="hug">
					${post.title}
				</h1>	
				${post.image ? `<img src=${post.image}>`:''}
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

	return template;
};