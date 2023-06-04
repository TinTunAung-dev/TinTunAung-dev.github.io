function sum(arr) {
    const filteredArr = arr.filter(n => n > 20);
    return filteredArr.reduce((prevVal, currVal) => prevVal + currVal, 0);
}

let numArr = [10, 20, 30, 40, 50, 60];
let total = sum(numArr);
console.log(total);