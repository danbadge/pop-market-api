var uuid = require('node-uuid'),
    items = [];

exports.load = function (id) {
    return items[id] ? JSON.parse(items[id]) : null;
};

exports.loadAll = function () {
    return items ? JSON.stringify(items) : null;
};

exports.save = function(item) {
    if(!item.id) {
        item.id = uuid.v4().replace(/\-/g, '').substring(0, 8);
    }
    items[item.id] = JSON.stringify(item);
};