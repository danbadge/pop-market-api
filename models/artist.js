share = require('./share.js');

function artist(data, id) {
    this.id = id;
    this.title = String(data.title) || "Untitled";
    this.share = data.share || new share();
}

module.exports = artist;