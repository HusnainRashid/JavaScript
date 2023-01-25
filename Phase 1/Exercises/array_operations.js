// const checkLength = (phoneNumber) => {
//     if (phoneNumber.length <= 10) {
//         return true;
//     };
// };

// const filterLongNumbers = (arrayOfNumbers) => {
//     new_array = arrayOfNumbers.filter(checkLength);
//     console.log(new_array);
// }

// const numbers = [
//     '1763687364',
//     '4763687363',
//     '7867867862',
//     'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
//   ];

// filterLongNumbers(numbers);

// filterLongNumbers(['4763687363', '7867867862']); // no number to filter out

// filterLongNumbers([])

const generateMessages = (namesArray) => {
    return `Hi ${namesArray.name}! ${namesArray.discount}% off our best candies for you.`;
}

// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
];
console.log(namesAndDiscounts.map(generateMessages))
