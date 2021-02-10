// Functions

// Methods = Built-in functions!

// || Function declaration syntax:

function sum(num1, num2) {
  if (num2 === undefined) {
    return num1;
  }
  console.log(num1);
  console.log(num2);
  return num1 + num2;
}

// Anonymous function
const getUserNameFromEmail = function (email) {
  return email.slice(0, email.indexOf("@"));
};

// Arrow function
// const getUserNameFromEmail = (email) => {
//   return email.slice(0, email.indexOf("@"));
// };

console.log(getUserNameFromEmail("na4raitda@naver.com"));

// Arrow function
const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("sePteMber"));
