class UserBase {
    User = require('./user');

    constructor(user) {
        this.user = user;
    };

    count() {
        return this.user.length();
    };

    getName() {
        this.User.getName();
    };

    getIntroduction() {
        this.User.getIntroduction();
    };
}

module.exports = UserBase;
