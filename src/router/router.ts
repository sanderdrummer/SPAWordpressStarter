import Route = require('./route');

const routes = [];
const findParam =  new RegExp(':[a-zA-Z]*');

/**
 * Parse hash and url and check for matching
 * 
 * @param  {string}   hash
 * @param  {Route}   route
 * @return {void}
 */
function parseRouteUrl(hash:string, route:Route){
    
    var result = getMatchAndParamsOf(hash, route.url);

    if (result.doesMatch) {
        
        route.callback(result.params);
    } 
}

/**
 * Checks if route matches hash 
 * and parses params from hash
 * 
 * @param  {string}   hash 
 * @param  {string}   url  
 * @return {Object}        
 */
function getMatchAndParamsOf(hash:string , url:string ) {
    
    var urlParts = url.split('/');
    var hashParts = hash.split('/');
    var doesMatch = false;
    var params = {};
    var allMatches = [];
    var key;
    
    // do both hash and url have the same size ?
    // -> could match  
    if (urlParts.length === hashParts.length) {
        
        // check all parts of given hash for matching if 
        // a part is identified to be a param it is ignored
        // for matching but saved into params Object
        hashParts.map((item, index) => {
            
            if (item === urlParts[index]) {

                allMatches.push(true);
                
            } else if(findParam.test(urlParts[index])) {
                
                // replace : indicator of param key
                key = urlParts[index].replace(':', '');
                params[key] = item
                
            } else {
                allMatches.push(false);
            }
        });
        
        // reduce all matching booleans to one boolean
        doesMatch = allMatches.reduce((a,b) =>{
            return a && b;
        });
                
    }
    
    // return doesMatch flag and parsed params
    return {
        params: params,
        doesMatch: doesMatch
    }
    
}

/**
 */
function handleHashChange(){
    const hash =  window.location.hash.replace('#', '');
    routes.forEach( (route) => {    
        parseRouteUrl(hash, route);
    });
}

// Adds global eventListener for routing on hashchange
window.addEventListener('hashchange', handleHashChange);

// special case for startup
document.addEventListener("DOMContentLoaded", handleHashChange);



// exports public api to register new route
export = {
    register: (url:string, callback) => {
        routes.push(new Route(url, callback));
        return this;
    }
};
