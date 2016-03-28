declare function require(string): string;
// require('../style/main.less');

import Router = require('./router/router');
import PostList = require('./components/post/postList');
import PageView = require('./components/page/pageView');
import HomeView = require('./components/homeView');
import CategoryApi = require('./components/category/categoryApi');

var postList = new PostList();
var pageView = new PageView();
var homeView = new HomeView();
var categorieApi = new CategoryApi();

categorieApi.getCategories();

Router.register('/', (params) => {
	homeView.getHome();
});
Router.register('/posts', (params) => {
	postList.getPosts(params);
});
Router.register('/posts/:category', (params) => {
	postList.filterPosts(params);
});
Router.register('/post/:id', (params) => {
	postList.getSinglePost(params);
});
Router.register('/page/:id', (params) => {
	pageView.getPage(params);
});