class Candy {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }

    getName() {
        return this.type;
    }

    getPrice() {
        return this.price;
    }
}

const candy = new Candy('Mars', 4.99);

console.log(candy.getName());

console.log(candy.getPrice());

module.exports = Candy;
