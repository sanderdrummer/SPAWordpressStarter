
import templateInterface = require('./templateInterface');
import CardTemplate = require('./cardTemplate');
import Post = require('../post');
import PostTemplate = require('./postTemplate');
import PostListTemplate = require('./postListTemplate');

class TemplateFactory {
    
    getListTemplate(category):templateInterface{
        switch (category) {
            case 'band':
                return new CardTemplate();
            default:
                return new PostListTemplate();
        }
    }
    
    getSingleTemplate(category):templateInterface{
        switch (category) {
            case 'band':
                return new PostTemplate();
            default:
                return new PostTemplate();
        }
    }

    getListTemplateString(posts:Post[], category):string{
        var template = this.getListTemplate(category);
        var templateString = '';

        templateString += template.preTemplate;
        templateString += this.compose(posts, template.template, category);
        templateString += template.postTemplate;

        return templateString;
    }

    getSingleTemplateString(post, category):string{
        var template = this.getSingleTemplate(category);
        var templateString = '';

        templateString += template.preTemplate;
        templateString += template.template(post, category);
        templateString += template.postTemplate;

        return templateString;
    }

    compose(posts:Post[], templateFunction, category) {
        return posts.map(post => {
            return templateFunction(post, category);
        }).join('');
    }
}

export = TemplateFactory;