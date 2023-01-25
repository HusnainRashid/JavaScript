// const printHello = () => {
//     console.log('Hello!');
// }

// setTimeout(printHello, 3000);

const executeAfterDelay = (delay, functionToExecute) => {
    setTimeout(functionToExecute, delay * 1000);
}

const printHello = () => {
    console.log('Hello!');
}

executeAfterDelay(5, printHello);
