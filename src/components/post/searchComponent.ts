import PostList = require('./postList');

console.log('kuchen' );

var input:HTMLInputElement = <HTMLInputElement>document.getElementById('searchInput');
var button:HTMLButtonElement = <HTMLButtonElement>document.getElementById('searchButton');

button.addEventListener('click', triggerSearch);

function triggerSearch(){
    var postList = new PostList;
    var searchString = input.value;
    postList.searchForPosts(searchString);
    input.value = '';
}