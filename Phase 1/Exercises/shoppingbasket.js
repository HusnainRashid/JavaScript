const Candy = require('./candy')
const candy = new Candy('Mars', 4.99);

class ShoppingBasket {
    addItem() {
        let items = []
        items.push()
        return items
    };

    getTotalPrice() {
        const total = 0;
        return total;
    };
};

const basket = new ShoppingBasket();
console.log(basket.addItem(candy));
console.log(basket.getTotalPrice());

