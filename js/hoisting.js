// Hoisting
// Two types - Variable Hoisting and Function Hoisting

// Variable Hoisting

// Variable hoisting with 'var' only hoists the declaration, not the initialization.
var captain;
console.log(captain); // Output: undefined because only declarations are hoisted, not initializations.
var captain = "MS Dhoni";
console.log(captain); // Output: MS Dhoni

// Variables declared with 'let' and 'const' are hoisted but remain in a temporal dead zone until their initialization.

let bowler; 
console.log(bowler); // Output: ReferenceError: Cannot access 'bowler' before initialization (Temporal Dead Zone)
let bowler = "Bumrah";
console.log(bowler); // Output: Bumrah

const batsman; 
console.log(batsman); // Output: SyntaxError: Missing initializer in const declaration
const batsman = "Virat Kohli";
console.log(batsman); // Output: Virat Kohli

// Function Hoisting

greetCustomer(); // Can call the function before its declaration due to function hoisting

function greetCustomer() {
  console.log('Welcome to WildBean Coffee Shop!');
}
