declare function require(string): string;
// require('../style/main.less');

import Router = require('./router/router');
import PostListFactory = require('./components/post/postListFactory');
import PageFactory = require('./components/page/pageFactory');
import HomeView = require('./components/homeView');
import CategoryApi = require('./components/category/categoryApi');

var postListFactory = new PostListFactory();
var pageFactory = new PageFactory();
var homeView = new HomeView();
var categorieApi = new CategoryApi();

categorieApi.getCategories();

Router.register('/', (params) => {
	homeView.getHome();
});
Router.register('/posts', (params) => {
	params.category = 'all';
	var postList = postListFactory.getpostList(params);
	postList.getPosts(params);
});
Router.register('/posts/:category', (params) => {
	var postList = postListFactory.getpostList(params);
	postList.getPosts(params);
});
Router.register('/post/:category/:id', (params) => {
	var postList = postListFactory.getpostList(params);
	postList.getSinglePost(params);
});
Router.register('/page/:id', (params) => {
	var pageView = pageFactory.getPageView(params);
	pageView.getPage(params);
});