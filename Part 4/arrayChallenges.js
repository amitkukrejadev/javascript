/*
Problem 1. Declare an array named 'teaFlavors' that contains the strings "green tea", "black tea", and "oolong tea".Access the first element of the array and store it in a variable named 'firstTea'
*/
let teaFlavors = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavors[0];
// console.log(firstTea);

/*
2.Declare an array named 'cities' containing "London", "Tokyo", "Paris", and "New York". Access the third element in the array and store it in a variable named 'favoriteCity'
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
let favoriteCity = cities[2];
// console.log(favoriteCity);

/*
3. You have an array named 'teaTypes' containing "herbal tea","white tea", and "masala chai".Change the second element of the array to "jasmine tea"
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"];
// console.log(teaTypes);
teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

/*
4. Declare an array named 'citiesVisited' containing "Mumbai" and "Sydney" Add "Berlin" to the array using the 'push' method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
// console.log(citiesVisited)

/*
Problem 5. You have an array named 'teaOrders with "chai",
"iced tea", "matcha", and "earl grey".
Remove the last element of the array using the 'pop' method and store it in a variable named 'lastorder'.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastorder = teaOrders.pop();
// console.log(lastorder);

/*
6. You have an array named 'popularTeas' containing
"green tea",
"oolong tea", and "chai".Create a soft copy of this array named softCopyTeas */

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
// console.log(popularTeas);

/*
7. You have an array named "topCities" containing
"Berlin", "Singapore", and "New York". Create a hard copy of this array named 'hardCopyCities'
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [];

hardCopyCities = [...topCities];
topCities.pop();
// console.log(topCities);
// console.log(hardCopyCities);

/*
8. You have two arrays: 'europeanCities' containing "Paris" and "Rome", and 'asiancities' containing "Tokyo" ' and '"Bangkok"• Merge these two arrays into a new array named 'worldCities'
*/

let europeanCities = ["Paris", "Rome"];
let asiancities = ["Tokyo", "Bangkok"];

let worldCities = europeanCities.concat(asiancities);

// console.log(worldCities);

/*
9. You have an array named 'teaMenu containing "masala chai" "oolong tea" "green tea", and "earl grey", Find the length of the array and store it in a variable named 'menuLength'. */

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

// console.log("The Length of Array is  " + menuLength);

/*
10. You have an array named 'cityBucketList' containing
"Kyoto","London" "Cape Town", and "Vancouver", Check if '"London" is in the array and store the result in a variable named 'isLondonInList'. */

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");

// console.log(isLondonInList);
// Another Method: Using shift & unshift

const array1 = [1, 2, 3];
const firstElement = array1.shift(); // Removes the first element (1)
console.log(firstElement); // Output: 1
console.log(array1); // Output: [2, 3]

const array2 = [1, 2, 3];
const lastElement = array2.pop(); // Removes the last element (3)
console.log(lastElement); // Output: 3
console.log(array2); // Output: [1, 2]

const array3 = [1, 2, 3];
array3.unshift(0); // Adds 0 to the beginning of the array
console.log(array3); // Output: [0, 1, 2, 3]

const array4 = [1, 2, 3];
array4.push(4); // Adds 4 to the end of the array
console.log(array4); // Output: [1, 2, 3, 4]

const array5 = [1, 2, 3];
// You may perform operations like concat, slice, etc. on array 5 if needed
