// 05_conditionals - exercise
const getNumberSign = (num) => {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

const isValidLength = (phoneNumber) => {
    if (phoneNumber.length === 11) {
        return true;
    } else {
        return false;
    }
}


// 05_conditionals - challenge
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


// 06_loops
const forLoop = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i + ' is even');
        } else {
            console.log(i + ' is odd');
        }
    }
}

// 07_function as values - exercise
const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

const transform = (message, transformFunction) => {
    return transformFunction(message);
}

// 07_function_as_values - challenge
const notifyByEmail = (email) => {
    return `Email sent to ${email}`;
}

const notifyByPhone = (phone) => {
    return `Text sent to ${phone}`;
}

const notify = (message, system) => {
    return system(message);
}


// 08_callbacks - exercise
const executeAfterDelay = (delay, functionToExecute) => {
    setTimeout(functionToExecute, delay * 1000);
}

const printHello = () => {
    console.log('Hello!');
}

// 08_callbacks - challenge
let counter = 0;

const increment = () => {
    console.log(counter);
    counter ++;
}

// setInterval(increment, 1000);

// 09_arrays - challenge
const addToBatch = (arr, numberToAdd) => {
    if (arr.length < 5) {
        const new_arr = arr.concat(numberToAdd);
        console.log(new_arr);
    } else {
        console.log(arr)
    }
}

// addToBatch([1, 2, 3], 4);
// addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);

// 10_objects
const person = {
    name: 'Maxine',
    age: 32,
    address: {
      city: 'London',
      postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
  };

// console.log(person['hobbies'][1])

const cohort = {
    name: 'May2022',
    id: 2033,
    students: ['Husnain', 'Rashid']
}

// console.log(cohort['id'] + ' - ' + cohort['name'] + ' - ' + cohort['students'].length + ' students in this cohort');


// 11_array_operations

const checkLength = (phoneNumber) => {
    if (phoneNumber.length <= 10) {
        return true;
    };
};

const filterLongNumbers = (arrayOfNumbers) => {
    new_array = arrayOfNumbers.filter(checkLength);
    console.log(new_array);
}

const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
  ];
// filterLongNumbers(numbers);

// filterLongNumbers(['4763687363', '7867867862']); // no number to filter out

const generateMessages = (namesArray) => {
    return `Hi ${namesArray.name}! ${namesArray.discount}% off our best candies for you.`;
}

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
];
console.log(namesAndDiscounts.map(generateMessages));
