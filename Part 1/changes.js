/**
 * Demonstrates the difference between `let` and `const` variable declarations.
 * 
 * - `let` allows reassignment of the variable's value.
 * - `const` is used for variables whose value should not change after initialization.
 * - Many professional and seasoned expert programmers prefer `const` over `let` (and avoid `var`) to enforce immutability (meaning the variable's value cannot be changed after it's set), reduce bugs, and make code intentions clearer.
 */
let gameName = "Spiderman";

console.log(gameName);
gameName = "Batman";
console.log(gameName);

const username = "amitkukrejadev";

// username = "amitkukreja.dev";

console.log(username);
