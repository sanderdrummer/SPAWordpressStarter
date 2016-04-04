import Config = require('../../config');

class NavBar {

	elem: Element;

	constructor(configs: any[]) {
		this.elem = document.getElementById(Config.NAVELEM);
	}

}

export = NavBar;