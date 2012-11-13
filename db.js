var uuid = require('node-uuid'),
    mongo = require('mongoskin'),
    conn = mongo.db('localhost:27017/pop-market-db?auto_reconnect'),
    artists = conn.collection('artists');

exports.findById = function (id, callback) {
    artists.findOne({ id: id }, function (err, item) {
        if (err) throw err;
        console.log(item)
        callback(item);
    });
};

exports.listAll = function (callback) {
    artists.find().toArray(function (err, items) {
        if (err) throw err;
        callback(items);
    });
};

exports.insert = function (item, callback) {
    if (!item) throw new Error();

    if (!item.id) item.id = uuid.v4().replace(/\-/g, '').substring(0, 8);
    artists.insert(item, function (err, item) {
        if (err) throw err;
        callback(item);
    });
};

exports.update = function (item) {
    artists.save(item);
};

exports.remove = function (id) {
    if (!id)  throw new Error('Missing id value');

    artists.remove({ id: id });
};