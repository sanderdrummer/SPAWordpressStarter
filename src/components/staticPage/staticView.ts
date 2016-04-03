import View = require('../view');

class StaticView extends View {

	template: string;

	constructor(template:string){
		super();
		this.template = template || '';
	}

	getHome(){
		this.render(this.template)
	}

}

export = StaticView;