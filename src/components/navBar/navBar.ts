import Config = require('../../config');

class NavBar {

	elem: Element;
	menu: Element;
	toggle: Element;

	constructor() {
		this.elem = document.getElementById(Config.NAVELEM);
		this.menu = document.getElementById(Config.MENU);
		this.toggle = this.elem.querySelector('.toggle');
		this.toggle.addEventListener('click', () => this.toggleNav());
		window.addEventListener('hashchange', () => {
			this.menu.classList.remove('fixed');
		});
	}

	toggleNav() {
		this.menu.classList.toggle('fixed');
	}



}

export = NavBar;