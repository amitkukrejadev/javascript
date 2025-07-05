// Checking if a number is greater than another number:
/* 
let num1= 10;
let num2 = 30;
if (num1 < num2) {
    console.log("Number 2 is Bigger");
} else {
    console.log("Number 1 is Bigger");
    
}
*/

// Checking if a String is equal to another string

let username = "amitkukreja";
let username2 = "amitkukreja";

if (username == username2) {
  console.log("Find a Different Username");
} else {
  console.log("You Can Pick this Username");
}

// Checking if Variable is Number or not

let score = 10;

if (typeof score === "number") {
  console.log("Its Number");
} else {
  console.log("Its a Alphabhet");
}

// Checking if boolean value is true or false

let magic = false;
if (magic) {
  console.log("True");
} else {
  console.log("False");
}

//Checking if array is empty or not

let items = ["item1"];

console.log(items.length);

if (items.length == 0) {
  console.log("Array is Empty");
} else {
  console.log("Array is not Empty");
}
