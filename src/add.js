class Add {
    constructor(date) {
        this.date = date;
    }

    year(year) {
        this.date.setFullYear(this.date.getFullYear() + year)
        return this.date.getFullYear();
    }

    month(month) {
        this.date.setMonth(this.date.getMonth() + month)
        return this.date.getMonth() + 1;
    }

    day(day) {
        this.date.setDate(this.date.getDate() + day);
        return this.date.getDate();
    }
}

module.exports = Add;
