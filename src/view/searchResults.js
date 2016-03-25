"use strict";
var Ajax = require('../ajax/call');
var Scroller = require('../components/scroller');
var results = [];
var newStart = 200;
function testCAllback() {
    newStart += 200;
    compileResultsWhile(results, newStart, newStart + 200);
    return true;
}
function compileResultsWhile(results, start, limit) {
    var length = results.length;
    var template = '';
    var result;
    var view = document.getElementById('view');
    if (start === 0) {
        view.innerHTML = '';
    }
    while (start < length && start < limit) {
        result = results[start];
        var articleData = '';
        var articleCount = result.articleIds.length;
        var articleIndex = 0;
        while (articleIndex < articleCount) {
            articleData += ("\n                <div class=\"grid\" id=\"a" + result.articleIds[articleIndex] + "\">\n                    <div class=\"col-6 art\">\n                        <a class=\"pn\" >" + result.articlename + " - " + result.articlenameextensions[articleIndex] + "</a> \n                    </div>\n                    <div class=\"col-6 data\">\n                        <div class=\"l\"></div>\n                        <div class=\"r\"></div>\n                        <div class=\"pl pl99999\"><small>99999</small></div>\n                        <div class=\"pop\">5485</div>\n                        <div class=\"s\">3</div>\n                        <div class=\"os\"></div>\n                        <div class=\"p\">" + result.price[articleIndex] + "</div>\n                    </div>\n                </div>\n                ");
            articleIndex += 1;
        }
        template +=
            "<div class=\"dummyarticle grid\">\n            <div class=\"thumbnail col-2\">\n                <img class=\"hidden\" alt=\"6\" src=\"https://www.reifensuche.com" + (result.articleimage ? result.articleimage.thumb : '') + "\">\n            </div>\n            <div class=\"articles col-9\">\n                " + articleData + "\n            </div>\n        </div>";
        start += 1;
    }
    view.insertAdjacentHTML('beforeEnd', template);
}
function compileResultsMap(results) {
    console.time('map');
    var template = results.map(function (result) {
        if (result.articleimage) {
            return "\n            <div class=\"dummyarticle\">\n                <div class=\"thumbnail\">\n                </div>\n                <div class=\"articles\">\n                    <div id=\"a131873\">\n                        <div class=\"art\">\n                            <a class=\"pn\" >" + result.articlename + "</a> \n                        </div>\n                        <div class=\"data\">\n                            <div class=\"l\"></div>\n                            <div class=\"r\"></div>\n                            <div class=\"pl pl99999\"><small>99999</small></div>\n                            <div class=\"pop\">5485</div>\n                            <div class=\"s\">3</div>\n                            <div class=\"os\"></div>\n                            <div class=\"p\">" + result.price[0] + "</div>\n                        </div>\n                    </div>\n                </div>\n            </div>";
        }
        else {
            return "\n            <div class=\"dummyarticle\">\n                <div class=\"thumbnail\">\n                </div>\n                <div class=\"articles\">\n                    <div id=\"a131873\">\n                        <div class=\"art\">\n                            <a class=\"pn\" >" + result.articlename + "</a> \n                        </div>\n                        <div class=\"data\">\n                            <div class=\"l\"></div>\n                            <div class=\"r\"></div>\n                            <div class=\"pl pl99999\"><small>99999</small></div>\n                            <div class=\"pop\">5485</div>\n                            <div class=\"s\">3</div>\n                            <div class=\"os\"></div>\n                            <div class=\"p\">" + result.price[0] + "</div>\n                        </div>\n                    </div>\n                </div>\n            </div>";
        }
    }).join('');
    console.timeEnd('map');
    console.time('append');
    var view = document.getElementById('view');
    view.innerHTML = '';
    view.insertAdjacentHTML('beforeEnd', template);
    console.timeEnd('append');
}
module.exports = {
    render: function (token) {
        Ajax.get('https://reifensuche:8081/Kaufen/Suchergebnisse?show&search=conti', function (res) {
            newStart = 200;
            results = res.results;
            Scroller.start(testCAllback);
            compileResultsWhile(res.results, 0, 200);
            document.getElementById('sortName').addEventListener('click', function () {
                var sorted = res.results.sort(function (a, b) {
                    return b.articlename * 1 - a.articlename * 1;
                });
                compileResultsWhile(sorted, 0, 200);
            });
            document.getElementById('sortPrice').addEventListener('click', function () {
                console.time('sort');
                var sorted = res.results.sort(function (a, b) {
                    return b.price[0] - a.price[0];
                });
                console.timeEnd('sort');
                compileResultsWhile(sorted, 0, 200);
            });
        });
    }
};
