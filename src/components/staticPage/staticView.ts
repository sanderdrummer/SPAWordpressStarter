import View = require('../view');
import eventBus = require('../../eventBus');

class StaticView extends View {

	template: string;

	constructor(template:string){
		super();
		this.template = template || '';
	}

	getPage(){
		eventBus.pageIsLoading(this);
		this.render(this.template);
		eventBus.pageLoaded(this);
	}

}

export = StaticView;