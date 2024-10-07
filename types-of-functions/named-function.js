// 1. Named function without arguments
greetUser(); // This works because the function is hoisted
function greetUser() {
    console.log('Hello, welcome to the coding world!'); // Outputs: 'Hello, welcome to the coding world!'
}

// 2. Named Function with Arguments and No Return Type:

function printProduct(x, y) {
    console.log(x * y); // prints the product of x and y
}

printProduct(4, 6); // Outputs: 24

// 3. Named Function without Arguments and a Return Type:

function getWelcomeMessage() {
    return 'You have successfully logged in!';
}

let message = getWelcomeMessage();
console.log(message); // Outputs: 'You have successfully logged in!'

// 4. Named Function with Arguments and a Return Type:

function getFullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return fullName;
}

let fullName = getFullName('John', 'Doe');
console.log(fullName); // Outputs: 'John Doe'
