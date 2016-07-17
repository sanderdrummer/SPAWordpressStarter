import PostApi = require('./postApi');
import Post = require('./post');
import View = require('../view');
import postListTemplate = require('./templates/postListTemplate');
import postTemplate = require('./templates/postTemplate');
import cardTemplate = require('./templates/cardTemplate');
import scrollPosition = require('../../services/scroll/scrollPosition');
import Param = require('../../router/param');
import eventBus = require('../../eventBus');
import TemplateFactory = require('./templates/templateFactory');
import Paging = require("./paging");

class PostList extends View{

	api: PostApi;
	templateCache: string;
	template: string;
	posts: Post[];
	pageCache: {};
	params: Param;
	page: number;
	totalPages: number;
	viewHeight: number;
	currentScrollPosition: number;
	leftPage: boolean;
	notDone: boolean;
	active: boolean;
	loading: boolean;
	enterPage: boolean;
    templateFactory: TemplateFactory;
    paging:Paging;

	constructor(category) {
		super();

		this.page = 1;
		this.totalPages = 1;
		this.pageCache = {};
		this.template = '';
		this.posts = [];
		this.api = new PostApi();
		this.notDone = true;
		this.leftPage = true;
		this.loading = false;
		this.enterPage = true;
		this.params = new Param({});
		this.currentScrollPosition = scrollPosition.get();
		this.paging = new Paging(category);
        this.templateFactory = new TemplateFactory();
	}

	getPosts(params:Param) {
		this.params = params;

		// this.addListLoadingState();
		if (this.enterPage) {
			eventBus.pageIsLoading(this);
		}
		// Check if posts are already in cache
		if (this.templateCache && !this.notDone) {
			this.render(this.templateCache);
			this.removeListLoadingState();
            this.handlePostsPaging(this.totalPages);
        } else {
			this.getPostsBy(params);
		}

		if (this.leftPage) {
			scrollPosition.set(this.currentScrollPosition);
			this.leftPage = false;
		}

	}

	getPostsBy(params:Param) {
        this.loader.show();

		// extend params
		params = params || new Param({});
		params.page = params.page || 1;
        this.params = params;

		var key = params.getCacheKey();
		if (this.pageCache[key]) {
			this.posts = this.pageCache[key];
			this.processTemplate();
		} else if(!this.loading) {
			this.fetchPostsByApi(params);
		}
	}

	processTemplate() {
		this.applyTemplate(this.params.category);
        this.render(this.template);
        this.setTemplateCache(this.template);
		this.viewHeight = this.getHeight();
		this.removeListLoadingState();
		if (this.enterPage) {
			eventBus.pageLoaded(this);
			this.enterPage = false;
		}

	}


	fetchPostsByApi(params:Param) {
		var key = params.getCacheKey();
		this.addListLoadingState();

		// fetch posts by api
		this.api.getPosts(params)
			.then((res) => {
                this.handlePostsPaging(res.headers.get('X-WP-TotalPages'));
				return res.json();
			})
			.then((res) => {
				if (res.length) {
					this.createPostList(res);
					this.processTemplate();
					this.pageCache[key] = this.posts;


				} else {
					this.notDone = false;
					this.removeListLoadingState();
				}
				this.loader.hide();
			},
				() => {this.removeListLoadingState()}
			);
	}

	handlePostsPaging(totalPages) {
        this.totalPages = totalPages;
        if (this.paging.processPaging(this.page, this.totalPages)) {
            this.paging.pagingElem.addEventListener('click', () => this.pageNext());
        }
    }

    pageNext() {
        this.page += 1;
        this.params.page = this.page;
        this.getPosts(this.params);
    }

	createPostList(rawPosts:Object[]) {
		var index = 0;
		var length = rawPosts.length;
		var rawPost;

		while (index < length) {
			rawPost = rawPosts[index];
			if (rawPost && 
				!this.getPostById(this.posts, rawPost.id)) {
				this.posts.push(new Post(rawPost));
			}

			index += 1;
		}
	}

	sortList() {
		this.posts.sort((a,b) => {
			return b.id - a.id;
		});
	}

	filterPosts(filterVar) {
		console.log(filterVar);
	}

	setTemplateCache(template) {

		// extend cache
		if (template && !this.notDone) {
			this.templateCache = template;
		}
	}

	getSinglePost(params:Param) {
		var post = this.getPostById(this.posts, params.id);
		
		this.currentScrollPosition = scrollPosition.get();
		this.leftPage = true;
        this.paging.hidePaging();

		if (post) {
			eventBus.pageIsLoading(this);
			post.render(this.templateFactory.getSingleTemplateString(post, params.category));
			scrollPosition.set(0);

		} else {
			this.api.getPost(params)
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					if (res.id) {
						post = new Post(res);
						post.render(this.templateFactory.getSingleTemplateString(post, params.category));
						scrollPosition.set(0);
						eventBus.pageLoaded(this);
					} else {
						this.notDone = false
					}
				});
		}
	}

    applyTemplate(category) {
        this.sortList();
        this.template = this.templateFactory.getListTemplateString(this.posts, category);
    }

	getPostById(list, id) {
		var post:Post;

		list.forEach((maybePost: Post) => {
			if (maybePost.id == id) {
				post = maybePost;
			}
		});

		return post;
	}

	addListLoadingState() {
        this.loading = true;
    }

	removeListLoadingState() {
        this.loader.hide();
        this.loading = false;
	}
}

export = PostList;