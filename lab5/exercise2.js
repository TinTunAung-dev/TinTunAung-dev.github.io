let getNewArray = function(arr) {
    return arr.filter(str => str.includes('a') && str.length >=5);
};

let strings = ['apple', 'banana', 'kiwi', 'orange', 'pear', 'watermelon'];
let result = getNewArray(strings);
console.log(result); 