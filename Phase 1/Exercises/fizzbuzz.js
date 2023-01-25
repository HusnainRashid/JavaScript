const fizzBuzz = (num) => {
    if (num % 5 === 0 && num % 3 === 0) {
        return 'FizzBuzz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else {
        return num;
    }
}

const fizzBuzzUntil = (num) => {
    for ( let i = 1; i <= num; i++ ) {
        if ( i % 5 === 0 && i % 3 === 0 ) {
            console.log('FizzBuzz');
        } else if ( i % 5 === 0 ) {
            console.log('Buzz');
        } else if ( i % 3 === 0 ) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
}

module.exports = fizzBuzzUntil;
