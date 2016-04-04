import Params = require('./params');
import View = require('../view');

class Route {
    url: string;
    label: string;
    callback: any;
    type: string;
    params: Params;
    view: View;

    constructor(config:any) {
        this.url = config.url;
        this.callback = config.callback;
        this.label = config.label;
        this.type = config.type;
        this.view = config.view;
    }

    setParams(config:any) {
    	this.params = new Params(config);
    }
}

export = Route;
