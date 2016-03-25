// import Ajax = require('../ajax/call');
// import Scroller = require('../components/scroller');

// var results = [];
// var newStart = 200;

// function testCAllback(){
//     newStart += 200; 
//     compileResultsWhile(results, newStart, newStart + 200)
//     return true;
// }

// function compileResultsWhile(results, start, limit) {
    
//     var length = results.length;
//     var template = '';
//     var result;
    

//     var view = document.getElementById('view');

//     if (start === 0) {
//         view.innerHTML = '';
//     }
    
//     while (start < length && start < limit){
//         result = results[start];
        
//         var articleData = '';
//         var articleCount = result.articleIds.length;
//         var articleIndex = 0;
        
//         while (articleIndex < articleCount) {
//             articleData += (`
//                 <div class="grid" id="a${result.articleIds[articleIndex]}">
//                     <div class="col-6 art">
//                         <a class="pn" >${result.articlename} - ${result.articlenameextensions[articleIndex]}</a> 
//                     </div>
//                     <div class="col-6 data">
//                         <div class="l"></div>
//                         <div class="r"></div>
//                         <div class="pl pl99999"><small>99999</small></div>
//                         <div class="pop">5485</div>
//                         <div class="s">3</div>
//                         <div class="os"></div>
//                         <div class="p">${result.price[articleIndex]}</div>
//                     </div>
//                 </div>
//                 `);
//             articleIndex += 1;
//         }
        
//         template += 
//         `<div class="dummyarticle grid">
//             <div class="thumbnail col-2">
//                 <img class="hidden" alt="6" src="https://www.reifensuche.com${result.articleimage ? result.articleimage.thumb : ''}">
//             </div>
//             <div class="articles col-9">
//                 ${articleData}
//             </div>
//         </div>`
        
        
//         start += 1;
//     }
    
//     // var $view = $('#view')
//     // $view.html('');
//     // $view.append(template);

//     view.insertAdjacentHTML('beforeEnd', template);
    
// }



// function compileResultsMap(results){
//     console.time('map');
    
//     var template = results.map(result => {
//         if(result.articleimage){
//             return `
//             <div class="dummyarticle">
//                 <div class="thumbnail">
//                 </div>
//                 <div class="articles">
//                     <div id="a131873">
//                         <div class="art">
//                             <a class="pn" >${result.articlename}</a> 
//                         </div>
//                         <div class="data">
//                             <div class="l"></div>
//                             <div class="r"></div>
//                             <div class="pl pl99999"><small>99999</small></div>
//                             <div class="pop">5485</div>
//                             <div class="s">3</div>
//                             <div class="os"></div>
//                             <div class="p">${result.price[0]}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>`
//         } else {
//             return `
//             <div class="dummyarticle">
//                 <div class="thumbnail">
//                 </div>
//                 <div class="articles">
//                     <div id="a131873">
//                         <div class="art">
//                             <a class="pn" >${result.articlename}</a> 
//                         </div>
//                         <div class="data">
//                             <div class="l"></div>
//                             <div class="r"></div>
//                             <div class="pl pl99999"><small>99999</small></div>
//                             <div class="pop">5485</div>
//                             <div class="s">3</div>
//                             <div class="os"></div>
//                             <div class="p">${result.price[0]}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>`
//         }
//     }).join('');
//     console.timeEnd('map');
//     console.time('append');
    
//     var view = document.getElementById('view');
//     view.innerHTML = '';
//     view.insertAdjacentHTML('beforeEnd', template);
//     console.timeEnd('append');
    
// }



// export = {
//     render: (token:string) => {
//         Ajax.get('https://reifensuche:8081/Kaufen/Suchergebnisse?show&search=conti', res => {
//             newStart = 200;
//             results = res.results;
//             Scroller.start(testCAllback);
//             compileResultsWhile(res.results, 0, 200);
//             // compileResultsMap(res.results);
            
//             document.getElementById('sortName').addEventListener('click', () => {
                
//                 var sorted = res.results.sort((a,b) => {
//                     return b.articlename * 1 - a.articlename * 1;
//                 })
//                 // console.log(sorted);
//                 compileResultsWhile(sorted, 0, 200);
                
//             });

//             document.getElementById('sortPrice').addEventListener('click', () => {
//                 console.time('sort');
                
//                 var sorted = res.results.sort((a,b) => {
//                     return b.price[0] - a.price[0];
//                 })
//                 console.timeEnd('sort');
//                 // console.log(sorted);
//                 compileResultsWhile(sorted, 0, 200);
//             });
//         });
//     }
// };
