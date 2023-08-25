const User = require('./user')

class UserBase {
    constructor(names) {
        this.names = names;
    };

    count() {
        return this.names.length;
    };

    getNames() {
        return this.names.map((namer) => {
            return namer.getName();
        });
    };

    getIntroduction() {
        return this.names.map((namer) => {
            return namer.getIntroduction();
        });
    };
};

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
];

const userBase = new UserBase(users);

console.log(userBase.count());

console.log(userBase.getNames(users));

console.log(userBase.getIntroduction(users));
