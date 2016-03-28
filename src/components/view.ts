import Config = require('../api/config');

class View {
	viewElem: Element;
	scroll:any;

	constructor() {
		this.viewElem = document.getElementById(Config.VIEWELEM);
	}

	render(template:string) {
		
		this.viewElem.innerHTML = template;
		this.viewElem.classList.remove('loader');
	}

	getHeight() {

		return this.viewElem.getBoundingClientRect().height;
	}
}

export = View;