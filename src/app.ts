declare function require(string): string;

require('../style/main.less');

import Router = require('./router/router');
import PostListFactory = require('./components/post/postListFactory');
import PageFactory = require('./components/page/pageFactory');
import StaticView = require('./components/staticPage/staticView');
import homeTemplate = require('./components/staticPage/homeTemplate');
import staticTemplate = require('./components/staticPage/staticTemplate');
import CategoryApi = require('./components/category/categoryApi');
// import NavBar = require('./components/navBar/navBar');
import ScrollToTop = require('./components/common/scrollToTop');
import scrollPosition = require('./services/scroll/scrollPosition');
// import scroller = require('./services/scroll/scroller');

var postListFactory = new PostListFactory();
var pageFactory = new PageFactory();
var homeView = new StaticView(homeTemplate);
var staticView = new StaticView(staticTemplate);
var router = new Router();
// var navBar = new NavBar();
// ScrollToTop.init('scrollToTop');

// set default route to home if no route is present
if (!window.location.hash) {
    window.location.hash = '#/';
}

router.register('/', (params) => {
	onRouteChange(homeView);
	homeView.getPage();
})
.register('/static', (params) => {
	postListFactory.getpostList(params);
	onRouteChange(staticView);
	staticView.getPage();
}).register('/posts', (params) => {
	params.category = 'all';
	var postList = postListFactory.getpostList(params);
	onRouteChange(postList);
	postList.getPosts(params);
})
.register('/posts/:category', (params) => {
	var postList = postListFactory.getpostList(params);
	onRouteChange(postList);
	postList.getPosts(params);
})
.register('/post/:category/:id', (params) => {
	var postList = postListFactory.getpostList(params);
	postList.getSinglePost(params);
})
.register('/page/:id', (params) => {
	var pageView = pageFactory.getPageView(params);
	onRouteChange(pageView);
	pageView.getPage(params);
});

function onRouteChange(view) {
   //  viewElem.classList.add('animated');
   // viewElem.classList.remove('fadeIn');
   // // viewElem.classList.add('fadeOut');
   //  setTimeout(() => {
   //     // viewElem.classList.remove('fadeOut');
   //     viewElem.classList.add('fadeIn');
   //  }, 100);
	document.getElementById('main-menu').classList.add('animated');
	scrollPosition.set(0);
    pageFactory.resetActive();
    postListFactory.resetActive();
    view.active = true;
} 

// document.body.style.backgroundImage = 'url(http://hd.wallpaperswide.com/thumbs/may_the_funk_be_with_you-t2.jpg)';
