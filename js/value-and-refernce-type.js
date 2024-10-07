// Value & Reference Types

// Value Type

let teamCSK= 5;
let teamMi = teamCSK; // teamMI is a copy of teamCSK
teamMI = 6;
console.log(teamCSK); // Output: 5 
console.log(teamMI); // Output: 6

// Reference Type

let car1 = { brand: "Tesla", model: "Model S" };
let car2 = car1; // car2 references the same object as car1
car2.model = "Model X";
console.log(car1.model); // Output: Model X (both car1 and car2 reference the same object)

