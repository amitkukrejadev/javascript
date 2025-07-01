console.log("Let's Start With DataTypes");
// For Comments Just Add "//"
// For Multi Line
/* 
This
How you
should write multi
line comments using this
*/

/* 
String
Numbers
Boolean

Bigint

undefinied
null doesn't mean its 0 you can say its empty don't contain anything
*/

// var Score = 45; Its not used anymore its depreciated
//Now We Use "let"
let a = 10;
console.log(a);
// Boolean
let isLoggedIn = true;
console.log(isLoggedIn);

//Using "Let" you can store anything number, string, boolean values

//Objects

let obj = {};
console.log(obj);
console.log(typeof obj);

//Array

let teaType = ["oolong tea", "Black tea", "Masala Tea"];
let user = { firstname: "Amit", lastname: "Kukreja" };
console.log(teaType);
console.log(typeof teaType);
console.log(user);
console.log(typeof user);

let Score = 101;
console.log(Score);
console.log(typeof Score);

let getScore = Score;
console.log(getScore);

/*
+-----------------+
|   Memory Block  |
|   +-------+     |
|   |  102  | <--- (holds the value of score)
|   +-------+     |
+-----------------+
       ^
       | (refers to)
    +-------+
    | score |
    +-------+
       ^
       | (invokes/accesses)
    +----------+
    | getScore |
    +----------+

*/
