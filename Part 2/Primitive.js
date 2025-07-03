// Number

// let Score = 125;

// let anotherScore = new Number(130);
// console.log(Score);
// console.log(typeof Score);
// // console.log(typeof(Score));
// console.log(Score.valueOf()); //
// console.log(anotherScore);
// console.log(typeof anotherScore);
// console.log(anotherScore.valueOf());

//boolean

let isActive = true;
let isReallyActive = new Boolean(false); // Not Recommended

console.log(typeof isActive);
console.log(typeof isReallyActive);

// null and undefined

let firstname = null;
let lastname = undefined;

console.log(firstname);
console.log(lastname);

let myString = "hello";
let myStringOne = "Hello Two";

//previous method in JS

let oldGreetMessage = myString + " " + "hitesh";
let userName = `Amit`;
console.log(oldGreetMessage);

let newGreetMessage = `Hello ${userName}!`; // This is known as String Interpolation
console.log(newGreetMessage);
//This also Supports Computed Properties
let demoOne = `Value is ${10 + 2}`;

console.log(demoOne);
