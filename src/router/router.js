"use strict";
var Route = require('./route');
var routes = [];
var findParam = new RegExp(':[a-zA-Z]*');
function parseRouteUrl(hash, route) {
    var result = getMatchAndParamsOf(hash, route.url);
    if (result.doesMatch) {
        route.callback(result.params);
    }
}
function getMatchAndParamsOf(hash, url) {
    var urlParts = url.split('/');
    var hashParts = hash.split('/');
    var doesMatch = false;
    var params = {};
    var allMatches = [];
    var key;
    if (urlParts.length === hashParts.length) {
        hashParts.map(function (item, index) {
            if (item === urlParts[index]) {
                allMatches.push(true);
            }
            else if (findParam.test(urlParts[index])) {
                key = urlParts[index].replace(':', '');
                params[key] = item;
            }
            else {
                allMatches.push(false);
            }
        });
        doesMatch = allMatches.reduce(function (a, b) {
            return a && b;
        });
    }
    return {
        params: params,
        doesMatch: doesMatch
    };
}
function handleHashChange() {
    var hash = window.location.hash.replace('#', '');
    routes.forEach(function (route) {
        parseRouteUrl(hash, route);
    });
}
window.addEventListener('hashchange', handleHashChange);
document.addEventListener("DOMContentLoaded", handleHashChange);
module.exports = {
    register: function (url, title, callback) {
        routes.push(new Route(url, title, callback));
    }
};
