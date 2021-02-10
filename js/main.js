// NaN

// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number.

console.log(Number.isNaN("June"));

// The global isNaN() function determines whether a value is NaN or not.

console.log(isNaN("June"));

// Math

console.log(Math.PI);

// Generating numbers from 1 to 10.

console.log(Math.floor(Math.random() * 10) + 1);

// Q. Why not ceil rather than floor?
// A. Because ceil has a very small chnace of resulting a 0, which results the numbers to range from 0 to 10.

// First code challange!
// Return a random letter from my Name.

const myName = "June Park";
const myNameNoBlank = myName.replace(" ", "");
const randNum = Math.random() * (myNameNoBlank.length - 1);

console.log(myNameNoBlank.charAt(randNum));

// Conditionals: If statements.

let reply;

if ("d") {
  reply = "TRUE!";
} else {
  reply = "FALSE?!";
}

console.log(reply);
