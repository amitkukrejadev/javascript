/* Problem 1. Write a while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'.*/

let sum = 0;
let i = 1;

while (i <= 5) {
  // sum = sum + i;
  sum += i;
  i++;
}

// console.log(sum);

/*
2. Write a while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
*/

let countdown = [];
let num = 5;

while (num > 0) {
  countdown.push(num);
  num--;
}
// console.log(countdown);

/*
Problem 3. Write a 'do while' loop that prompts a user to enter their favorite tea type until they enter '"stop"', Store each tea type in an array named 'teaCollection'
*/

let teaCollection = [];
// let tea;

// do {
//   tea = prompt("Enter your Favourite tea Type `Stop` to Exit: ");
//   if (tea !== "Stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "Stop");

// console.log(teaCollection);

/* Problem 4. Write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'.
 */

let numb = 1;
let total = 0;

do {
  total = total + numb
  numb++
} while (numb < 4);

// console.log(total);


/*
5. Write a 'for' loop that multiplies each element in the array [2, 4, 6] by 2 and stores the results in a new array named 'multipliedNumbers'.
*/

let multipliedNumbers = []
let numbers = [2, 4, 6]

for (let i = 0; i < numbers.length; i++) {
  // takeNumbers = numbers[i] * 2
  // multipliedNumbers.push(takeNumbers)
  multipliedNumbers.push(numbers[i]*2)
}

console.log(multipliedNumbers);


/*6. Write a 'for' loop that lists all the cities in the array '["Paris", "New York", "Tokyo", "London"]' and stores each city in a new array named 'citylist'.
*/

let cities = ["Paris", "New York", "Tokyo", "London"]
let citylist = []

for (let k = 0; k < cities.length; k++) {
  // citylist.push(originalCities[k]);
  // citylist.unshift(myCity) it will print in reverse the array
  const myCity = cities[k]
  citylist.push(myCity)
}
console.log(citylist);

