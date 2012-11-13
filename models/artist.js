share = require('./share.js');

function artist(data) {
    this.id = data.id || undefined;
    this.title = String(data.title) || "Untitled";
    this.share = data.share || new share();
}

module.exports = artist;