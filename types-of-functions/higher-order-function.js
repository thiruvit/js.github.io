// Higher-Order Function that Takes a Function as an Argument
let concatenateStrings = (strOne, strTwo) => {
    return strOne + ' ' + strTwo;
}

let reverseStrings = (strOne, strTwo) => {
    return strOne.split('').reverse().join('') + ' ' + strTwo.split('').reverse().join('');
}

let processStrings = (strOne, strTwo, operator) => {
    return operator(strOne, strTwo);
}

console.log(processStrings('Hello', 'World', concatenateStrings)); // Output: Hello World
console.log(processStrings('Hello', 'World', reverseStrings)); // Output: olleH dlroW


// Higher-Order Function that Returns a Function (Anonymous Function)
const exponentiateBy = (power) => {
    return base => Math.pow(base, power);
};

const square = exponentiateBy(2);
console.log(square(4));  // Output: 16

const cube = exponentiateBy(3);
console.log(cube(3));  // Output: 27


// Take another function as argument and return a function
var createGreeting = (greeting) => {
    return (name) => {
        return `${greeting}, ${name}!`;
    }
}

var applyGreeting = (greetFunction, name) => {
    return greetFunction(name);
}

var greetWithHello = createGreeting('Hello');
console.log(applyGreeting(greetWithHello, 'Alice'));  // Output: Hello, Alice!

var greetWithWelcome = createGreeting('Welcome');
console.log(applyGreeting(greetWithWelcome, 'Bob'));  // Output: Welcome, Bob!
