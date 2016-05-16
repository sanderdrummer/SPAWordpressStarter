class Loader {
	
	loaderElem: Element;

	constructor() {
		this.loaderElem = document.getElementById('loader');
	}

	show() {
		this.loaderElem.style.display = 'block';
	}

	hide() {
		this.loaderElem.style.display = 'none';
	}
}

export = Loader;