import View = require('./view');

var template = `
	<div class="center container grid">
		<h1>Home View</h1>
		<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>
	</div>
`

class HomeView extends View {

	template: string;

	constructor(){
		super();
		this.template = template;
	}

	getHome(){
		this.render({
			template: this.template,
			append: false
		})
	}

}

export = HomeView;