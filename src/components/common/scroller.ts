var lastPosition = window.pageYOffset;
var stop = false;
var onScroll = function(){};
// animationFrame
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000 / 60); };

function loop(){
    // avoid calculations if not needed
    if (lastPosition === window.pageYOffset) {
        scroll(loop);

    } else {
                
        if( window.pageYOffset > 1000) {
            onScroll();
        }
        // toggleNavOnScroll(w.pageYOffset);
        // revealElementsInViewport(opaqueElems);

        lastPosition = window.pageYOffset;

        scroll(loop);
    }

}

export = {
    start: function(callback){
        onScroll = callback;
        loop();
    }
}
