// 1. Function Expression Without Argument and Without Return Type:

// greetUser(); // If we call this function here, it will throw an error (greetUser is not a function).
var greetUser = function() {
    console.log('Hello! Welcome to the library.');
};

greetUser(); // Output: Hello! Welcome to the library.

// 2. Function Expression With Argument and With Return Type:
let calculateArea = function(radius) {
    return Math.PI * radius * radius;
};

console.log(calculateArea(5)); // Output: 78.53981633974483
