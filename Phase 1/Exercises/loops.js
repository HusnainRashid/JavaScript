const forLoop = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i + ' is even');
        } else {
            console.log(i + ' is odd');
        }
    }
}

module.exports = forLoop;

// const num = forLoop;
// console.log(num);
