const names = ['Husnain', 'Muhammad', 'Hayyan'];
const new_names = names.concat('Zuly', 'Adam')

// console.log(names[1]);
// console.log(new_names)

// const addition = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let total = 0;

// addition.forEach((number) => {
//     console.log(total += number);
// })

const addToBatch = (arr, numberToAdd) => {
    if (arr.length < 5) {
        const new_arr = arr.concat(numberToAdd);
        console.log(new_arr);
    } else {
        console.log(arr)
    }
}

addToBatch([1], 3);

addToBatch([1, 2, 3], 4);

addToBatch([], 8);

addToBatch([1, 2, 3, 4, 5, 6], 7);

addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);

