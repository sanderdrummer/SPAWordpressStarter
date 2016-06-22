import Post = require('./post');

export = function postListTemplate(post: Post, category) {
    return `
	<div id="post_${post.id}" class="box effect8">
		<div class="grid">
			<div class="col-12">
				<a href="#/posts/${category}/${post.id}">
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
				<a href="#/posts/${category}/${post.id}">
					mehr lesen
				</a> 
			</div>
		</div>
	</div>
	`;
}
