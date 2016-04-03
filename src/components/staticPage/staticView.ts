import View = require('../view');

class StaticView extends View {

	template: string;

	constructor(template:string){
		super();
		this.template = template || '';
	}

	getPage(){
		this.render(this.template)
	}

}

export = StaticView;