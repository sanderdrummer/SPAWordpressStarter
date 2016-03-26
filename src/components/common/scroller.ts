var lastPosition = window.pageYOffset;
var stop = false;
var onScroll = [];

// animationFrame
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000 / 60); };

function loop(){
    // avoid calculations if not needed
    if (lastPosition === window.pageYOffset) {
        scroll(loop);

    } else {
               
        // toggleNavOnScroll(w.pageYOffset);

        lastPosition = window.pageYOffset;
        
        scroll(loop);
    }

}

export = {
    addOnScroll: function(callback){
        onScroll.push(callback);
    },
    start: () => loop()

}
