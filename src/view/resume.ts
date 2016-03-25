// import ResumeData = require('./data/resume');
// // import SubNav = require('../components/subnav');
// // 
// // function createResumeSubNav(ResumeData){
// //     var view = document.getElementById('view');
// //     var config = {
// //         depth: 1,
// //         key: 'title'
// //     };
// //     var resumeSubNav = new SubNav(ResumeData, config,  view);
// // }

// function renderCategories (ResumeData, params) {
    
    
//     var filterd = ResumeData.filter((item) => {
//         return item.title.indexOf(params.title) > -1;
//     });
    
//     return filterd.map(category => {
//         var entries = renderEntries(category.entries);
//         return`<h2>
//             ${category.title}
//         </h2>
//         <ul>
//             ${entries}
//         </ul>
//         `
//     }).join('');
// }

// function renderEntries(entries) {
//     return entries.map( entry => {
                
//         return`
//         <li class="grid">
//             <div class="col-3 grey">
//                 ${entry.label}
//             </div>
//             <div class="col-9">
//                 <h3 class="hug">
//                 ${entry.title}
//                 </h3>
//                 ${ entry.description ? `
//                 <p class="">
//                     ${entry.description}
//                 </p>
//                 ` : ''}
//                 </div>
//             </li>
//         `        
//     }).join('');
// }

// export = {
//     render: function(params){
        
//         var view = document.getElementById('view');
//         var template = renderCategories(ResumeData, params);
//         view.innerHTML = '';
//         view.insertAdjacentHTML('beforeEnd', template);
//     }
// }
