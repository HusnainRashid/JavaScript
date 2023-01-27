class User {
    constructor(name) {
        this.name = name;
    };

    getName() {
        return this.name;
    };

    getIntroduction() {
        return `Hi, my name is ${this.name}.`;
    };
}

// const user = new User('Uma');

// user.getName();

// user.getIntroduction();
module.exports = User;
