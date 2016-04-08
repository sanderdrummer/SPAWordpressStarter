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
    }
}

export = EventBus;