// Arrow function with no argument
let noArgument = () => 'Welcome to the JavaScript world!';
console.log(noArgument()); // Output: Welcome to the JavaScript world!

// Arrow function with a single statement
const singleStatement = course => `You are learning ${course}`;
let result = singleStatement('Frontend Development');
console.log(result); // Output: You are learning Frontend Development

// Arrow function with multiple statements
const describeHobby = hobby => {
    let description = `My favorite hobby is ${hobby}.`;
    return description;
};
let hobbyResult = describeHobby('painting');
console.log(hobbyResult); // Output: My favorite hobby is painting.

// Arrow function with a callback
const performOperation = (num, callback) => {
    const result = num * 2;
    callback(result);
};

performOperation(5, (output) => {
    console.log(output); // Output: 10
});

// Arrow Function Returning an Object
const bookInfo = ((title, author) => {
    return { title, author };
})('The Great Gatsby', 'F. Scott Fitzgerald');
console.log(bookInfo); // Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
