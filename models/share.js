function share(data) {
    this.total = 10000;
    this.price = 1;
    this.available = this.total;

    if (data) {
        this.available -= data.amount;
    }
}

module.exports = share;