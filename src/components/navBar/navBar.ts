import Config = require('../../config');

class NavBar {

	elem: Element;
	toggle: Element;

	constructor() {
		this.elem = document.getElementById(Config.NAVELEM);
		this.toggle = this.elem.querySelector('.toggle');
		this.toggle.addEventListener('click', () => this.toggleNav());
	}

	toggleNav() {
		this.elem.classList.toggle('inView');
	}

}

export = NavBar;