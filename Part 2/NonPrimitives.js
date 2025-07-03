let taskList = {
  task1: "Buy Groceries",
  task2: "Buy Fruits",
  task3: "Buy Vegetables",
};

console.log(taskList.task1); // This is How we can Access its Properties
console.log(taskList.task2);
console.log(taskList.task3);

console.log(taskList);

console.log(typeof taskList);

//Array

let taskList2 = ["Buy Laptop", "Buy Smartwatch", "Buy Airpods", "True"];

console.log(taskList2[0]);
console.log(taskList2[1]);
console.log(taskList2[2]);
console.log(taskList2[4]);
console.log(taskList2.length);

console.log(1 + "1");

let Magic = true;
console.log(Magic + 1); // True + 1 = 2 Javascript considers True as 1

let Magic2 = false;
console.log(Magic2 + 1); // False + 1 = 1 Javascript considers False as 0

let Magic3 = "2abc";
console.log(typeof Number(Magic3));

let today = new Date();

console.log(
  today.getDate() + "-" + "0" + today.getMonth() + "-" + today.getFullYear()
);
