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

let items = []

class ShoppingBasket {
    addItem(item) {
        items.push(item)
        return items
    };

    showItems() {
        return items;
    }

    getTotalPrice() {
        let total = 0;
        items.forEach((item) => {
            total += item.price;
        })
        return total;
    };
}

const basket = new ShoppingBasket();
basket.addItem(new Candy('Mars', 4.99))
basket.addItem(new Candy('Skittle', 3.99));
console.log(basket.getTotalPrice())

module.exports = Candy;
