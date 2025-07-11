// function greet(name) {
//     // console.log("Hello " + name) Old Way Bottom New Way
//     console.log(`Hello ${name}`)
// }

// greet("Amit");

/*
1. Write a function named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like
'"Making green tea"' when called with '"green tea"'.
Store the result in a variable named 'teaOrder'
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("Masala Chai");

// console.log(teaOrder);

/* Problem 2. Create a function named 'orderTea that takes one parameter, 'teaType"
'teaType'. Inside this function, create another function named 'confirmorder' that returns a message like '"Order confirmed for chai"'. Call 'confirmorder' from within 'orderTea' and return the result. */
function orderTea(teaType) {
  function confirmorder() {
    return `Order confirmed for chai`;
  }
  return confirmorder();
}

// orderTea("Masala Tea");

/* Problem 3. Write an arrow function named 'calculateTotal that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity' Store the result in a variable named 'totalCost' */

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

const result = calculateTotal(120, 2);
console.log(result);
