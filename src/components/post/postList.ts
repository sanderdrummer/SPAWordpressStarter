import PostApi = require('./postApi');
import Post = require('./post');
import View = require('../view');
import postListTemplate = require('./postListTemplate');
import postTemplate = require('./postTemplate');
import cardTemplate = require('./templates/cardTemplate');
import scrollPosition = require('../../services/scroll/scrollPosition');
import Param = require('../../router/param');
import Loader = require('../common/loader');

class PostList extends View{

	api: PostApi;
	templateCache: string;
	template: string;
	posts: Post[];
	// filteredPosts: Post[];
	pageCache: {};
	params: Param;
	page: number;
	viewHeight: number;
	currentScrollPosition: number;
	leftPage: boolean;
	notDone: boolean;
	active: boolean;
	loading: boolean;
	loaderElement: HTMLElement;

	constructor() {
		super();

		this.page = 1;
		this.pageCache = {};
		this.template = '';
		this.posts = [];
		this.api = new PostApi();
		this.notDone = true;
		this.leftPage = true;
		this.loading = false;
		this.params = new Param({});
		this.currentScrollPosition = scrollPosition.get();
		this.loaderElement = this.createLoaderElement();

		document.addEventListener('scroll', () => {
			if (this.notDone && 
				this.active &&
				!this.loading
				) {
				this.appendOnScroll(this.params);
			}
		});

	}

	getPosts(params:Param) {
		this.params = params;

		if (this.leftPage) {
			// this.viewElem.classList.add('loader');
			this.loader.show();
		}

		// Check if posts are already in cache
		if (this.templateCache && !this.notDone) {
			this.render(this.templateCache);

		} else {
			this.getPostsBy(params);
		}

		if (this.leftPage) {
			scrollPosition.set(this.currentScrollPosition);
			this.leftPage = false;
		}

	}

	getPostsBy(params:Param) {

		// extend params
		params = params || new Param({});
		params.page = params.page || 1;

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
	}


	fetchPostsByApi(params:Param) {
		var key = params.getCacheKey();

		this.addListLoadingState();

		// fetch posts by api
		this.api.getPosts(params)
			.then((res) => {
				return res.json();
			})
			.then((res) => {

				if (res.length) {
					this.createPostList(res);
					this.processTemplate();
					this.pageCache[key] = this.posts;
					this.removeListLoadingState();

				} else {
					this.notDone = false;
					this.removeListLoadingState();
				}
			},
				() => {this.removeListLoadingState()}
			);
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


	appendOnScroll(params) {
		this.page += 1;
		params.page = this.page;
		this.getPosts(params);
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

		if (post) {
			post.render(postTemplate(post, params.category));
			scrollPosition.set(0);
			
		} else {
			this.api.getPost(params)
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					if (res.id) {
						post = new Post(res);
						post.render(postTemplate(post, params.category));
						scrollPosition.set(0);
					} else {
						this.notDone = false
					}
				});
		}


	}

    applyTemplate(category) {
        var template = '';

        switch (category) {
            case 'gigs':
                template += '<div class="flex">';
                template += this.compose(cardTemplate, category);
                template += '<div>';
                break;

            default:
                template = this.compose(postListTemplate, category);

                break;
        }

        this.template = template;
    }

    compose(templateFunction, category) {
        this.sortList();
        return this.posts.map(post => {
            return templateFunction(post, category);
        }).join('');
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

	createLoaderElement() {
		this.viewElem.insertAdjacentHTML('afterend', `<div id="listLoader${this.params.category}" class="loader" style="display: none"><div class="icon-spinner"></div></div>`);
		var elem = document.getElementById(`listLoader${this.params.category}`);
		return elem;
	}

	addListLoadingState() {
		this.loading = true;
		this.loaderElement.style.display = 'block';
	}

	removeListLoadingState() {
		this.loading = false;
		this.loaderElement.style.display = 'none';
	}
}

export = PostList;