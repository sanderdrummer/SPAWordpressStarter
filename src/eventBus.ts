/**
 * Created by Tobias on 08.04.2016.
 */
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
        console.log('load page', page );
    },

    pageLoaded: function(page) {
        console.log('loaded page',page);
    },

    postsLoading: function(page) {
        console.log('load posts', page );
    },

    postsLoaded: function(page) {
        console.log('loaded posts', page );
    }
};

export = EventBus;