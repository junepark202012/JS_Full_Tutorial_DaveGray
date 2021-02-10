// Arrays
const myArray = [];

// add elements to an array
myArray[0] = "June";
myArray[1] = 1000;
myArray[2] = true;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

// refer
console.log(myArray[1]);

// append
myArray.push("school");

console.log(myArray);

// remove
const lastItem = myArray.pop();

console.log(myArray);
console.log(lastItem);

// unshift
const newLength = myArray.unshift(42);

console.log(myArray);
console.log(newLength); // This is same in push.
