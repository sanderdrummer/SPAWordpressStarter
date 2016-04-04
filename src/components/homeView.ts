import View = require('./view');

var template = `
	<div class="grid box">
		<h2 class="serif">Home View</h2>
		<p class="lead"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>		
		<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>		
		<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>
	</div>
`;

class HomeView extends View {

	template: string;

	constructor(){
		super();
		this.template = template;
	}

	getHome(){
		this.render(this.template)
	}

}

export = HomeView;