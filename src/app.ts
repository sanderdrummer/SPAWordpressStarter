declare function require(string): string;
// require('../style/main.less');

import Router = require('./router/router');
import PostView = require('./components/post/postView');

console.log(PostView);
var postView = new PostView();

Router.register('/post', 'post', (params) => {
	postView.render();
});

