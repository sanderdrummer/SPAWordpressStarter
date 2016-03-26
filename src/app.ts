declare function require(string): string;
// require('../style/main.less');

import Router = require('./router/router');
import PostList = require('./components/post/postList');
import HomeView = require('./components/homeView');

var postList = new PostList();
var homeView = new HomeView();

Router.register('/post', 'post', (params) => {
	console.log('posts');
	postList.getPosts(params);
});
Router.register('/', 'Home', (params) => {
	homeView.getHome();
	// postList.getPosts();
});

