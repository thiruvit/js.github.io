// IIFE with a Regular Function
var city = 'New York';
(function() {
    var city = 'Los Angeles';
    console.log(city); // Output: Los Angeles
})();
console.log(city); // Output: New York (IIFE creates a private scope, so 'city' inside it doesn't affect the outer one)

// IIFE with an Arrow Function
((country) => { // arrow function syntax for IIFE
    var favoriteCountry = country;
    console.log(favoriteCountry); // Output: Japan
})('Japan');
