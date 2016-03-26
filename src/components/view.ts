import Config = require('../api/config');

class View {
	viewElem: Element;
	scroll:any;

	constructor() {
		this.viewElem = document.getElementById(Config.VIEWELEM);
	}

	render(config:any) {
		
		config.template = config.template || '';
		config.append = config.append || false;

		if (config.append) {
			this.viewElem.innerHTML += config.template;

		} else {
			this.viewElem.innerHTML = config.template;
		}
	}

	getHeight() {

		return this.viewElem.getBoundingClientRect().height;
	}
}

export = View;