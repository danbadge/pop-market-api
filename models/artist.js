function artist(data, id) {
    this.id = id;
    this.title = String(data.title) || "Untitled";
    this.sharePrice = data.sharePrice || 1;
    this.shares = data.shares || 0;
}

module.exports = artist;