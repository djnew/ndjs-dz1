
class Current {
    constructor(date) {
        this.date = date;
    }

    current(){
        return this.date.toISOString();
    }

    year() {
        return this.date.getFullYear();
    }

    month() {
        return this.date.getMonth() + 1;
    }

    day() {
        return this.date.getDate();
    }
}

module.exports = Current;
