"use strict";
var ResumeData = require('./data/resume');
function renderCategories(ResumeData, params) {
    var filterd = ResumeData.filter(function (item) {
        return item.title.indexOf(params.title) > -1;
    });
    return filterd.map(function (category) {
        var entries = renderEntries(category.entries);
        return "<h2>\n            " + category.title + "\n        </h2>\n        <ul>\n            " + entries + "\n        </ul>\n        ";
    }).join('');
}
function renderEntries(entries) {
    return entries.map(function (entry) {
        return "\n        <li class=\"grid\">\n            <div class=\"col-3 grey\">\n                " + entry.label + "\n            </div>\n            <div class=\"col-9\">\n                <h3 class=\"hug\">\n                " + entry.title + "\n                </h3>\n                " + (entry.description ? "\n                <p class=\"\">\n                    " + entry.description + "\n                </p>\n                " : '') + "\n                </div>\n            </li>\n        ";
    }).join('');
}
module.exports = {
    render: function (params) {
        var view = document.getElementById('view');
        var template = renderCategories(ResumeData, params);
        view.innerHTML = '';
        view.insertAdjacentHTML('beforeEnd', template);
    }
};
