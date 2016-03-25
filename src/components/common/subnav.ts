import Router = require('../router/router');


export = class {
    model;
    config;
    constructor(model, config, parent){
        this.model = model;
        this.config = config;
        this.createSubNav(parent);
    }
    createSubNav(parent){
        console.log(this.model, this.config)
        
        var template = `${this.model[this.config.key].map((item) => {
            
        }).join('')}
        
        `
        
    }
}
