import Config = require('../config');
import Loader = require('../components/common/loader');


class View {
	viewElem: HTMLElement;
	scroll:any;
	active: boolean;
	loader: Loader;

	constructor() {
		this.viewElem = document.getElementById(Config.VIEWELEM);
		this.loader = new Loader();
	}

	render(template:string) {
		
		this.viewElem.innerHTML = template;
		this.loader.hide();
	}

	getHeight() {

		return this.viewElem.getBoundingClientRect().height;
	}
}

export = View;
