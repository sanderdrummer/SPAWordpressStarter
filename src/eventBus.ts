import Loader = require('./components/common/loader');
import scrollPosition = require('./services/scroll/scrollPosition');

var loader = new Loader();


var EventBus = {

    bus:{},

    register: function(name, fn) {
        if (!this.bus[name]) {
            this.bus[name] = [];
        }
        return this.bus[name].push(fn);
    },

    on: function(name, data) {
        var i;
        var event = this.bus[name];
        if(event) {
            i = event.length;
            while (i--) {
                event[i](data);
            }
        }
    },

    pageIsLoading: function(page) {
        // page.viewElem.classList.remove('animated');
        // page.viewElem.classList.remove('bounceIn');
        loader.show();
        // console.log('load page', page );
        // page.viewElem.classList.add('bounceOut');
        // page.viewElem.classList.add('animated');
    },

    pageLoaded: function(page) {
        // page.viewElem.classList.remove('animated');
        // page.viewElem.classList.remove('bounceOut');
        // page.viewElem.classList.add('bounceIn');
        // page.viewElem.classList.add('animated');
        loader.hide();
        scrollPosition.set(0);
        // console.log('loaded page',page);
    },

    postsLoading: function(page) {
        // console.log('load posts', page );
    },

    postsLoaded: function(page) {
        // console.log('loaded posts', page );
    }
};

export = EventBus;