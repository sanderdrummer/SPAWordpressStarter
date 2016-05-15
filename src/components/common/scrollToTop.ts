import scrollPosition = require('../../services/scroll/scrollPosition');
import scroller = require('../../services/scroll/scroller');
var elem;

function toTop() {
	scrollPosition.set(0);
}



scroller.addOnScroll(showOnScroll);
function showOnScroll(lastPosition) {
	if (lastPosition > 300) {
		elem.style.opacity = 1;
	} else {
		elem.style.opacity = 0;

	}
}
const ScrollToTop = {

	init: function(id) {
		elem = document.getElementById(id);
		elem.addEventListener('click', () => {
			toTop();
		});
	}
}

export = ScrollToTop;