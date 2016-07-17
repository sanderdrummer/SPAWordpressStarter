import Post = require('../post');
import templateInterface = require("./templateInterface");

class CardTemplate implements templateInterface {
    preTemplate:string;
    template:any;
    postTemplate:string;

    constructor() {
        this.preTemplate = `<div class="flex">`;
        this.postTemplate = `</div>`;
        this.template = function cardTemplate(post: Post, category) {
            return `
                <div id="post_${post.id}" class="cards-item">
                    <a href="#/post/${category}/${post.id}">
                        <div>
                            <h2 class="hug">
                                ${post.title}
                            </h2>	
                            ${post.image ? `<img src=${post.image}>` : ''}
                        </div>
                        ${post.excerpt}
                    </a>
                </div>
	`;
        }
    }
}

export = CardTemplate;
