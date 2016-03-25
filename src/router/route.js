"use strict";
module.exports = (function () {
    function Route(url, title, callback) {
        this.url = url;
        this.title = title;
        this.callback = callback;
    }
    return Route;
}());
