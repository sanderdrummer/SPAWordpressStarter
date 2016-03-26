declare function require(string): string;
// require('../style/main.less');

import Router = require('./router/router');
import PostList = require('./components/post/postList');
import PageView = require('./components/page/pageView');
import HomeView = require('./components/homeView');

import scroller = require('./components/common/scroller');

var postList = new PostList();
var pageView = new PageView();
var homeView = new HomeView();

Router.register('/', (params) => {
	homeView.getHome();
	// postList.getPosts();
});
Router.register('/posts', (params) => {
	postList.getPosts(params);
});
Router.register('/post/:id', (params) => {
	postList.getSinglePost(params);
});
Router.register('/page/:id', (params) => {
	pageView.getPage(params);
});