declare function require(string): string;
// require('../style/main.less');

import Router = require('./router/router');
import PostList = require('./components/post/postList');
import HomeView = require('./components/homeView');

import scroller = require('./components/common/scroller');

var postList = new PostList();
var homeView = new HomeView();


Router.register('/', 'Home', (params) => {
	homeView.getHome();
	// postList.getPosts();
});
Router.register('/posts', 'post', (params) => {
	postList.getPosts(params);
});
Router.register('/post/:id', 'post', (params) => {
	postList.getSinglePost(params);
});