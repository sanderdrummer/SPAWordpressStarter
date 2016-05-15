var lastPosition = window.pageYOffset;
var onScroll = [];

// animationFrame
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000 / 60); };

function loop(){
    // avoid calculations if not needed
    if (lastPosition === window.pageYOffset) {
        scroll(loop);

    } else {
        lastPosition = window.pageYOffset;
        onScroll.forEach(function(cb){
            cb(lastPosition);
        })        
        scroll(loop);
    }

}

loop();

export = {
    addOnScroll: function(callback){
        onScroll.push(callback);
    }
}
