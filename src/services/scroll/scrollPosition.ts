var scrollPosition = {
	
	get: function(){
		return document.documentElement.scrollTop || document.body.scrollTop
	},

	set: function(position:number){
		setTimeout(() => {
			scrollTo(0, position)
		},100);
	}
}

export = scrollPosition;