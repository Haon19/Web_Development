const customFunctions = require('./custom-functions'), arrowFunctions = require('./arrow-functions.js')

console.log(customFunctions.cube(3)); // Test the cube function
console.log(customFunctions.fullName('John', 'Doe')); // Test the fullName function
console.log(customFunctions.power(2, 3)); // Test the power function
console.log(customFunctions.sumCubes([1, 2, 3])); // Test the sumCubes function
console.log(arrowFunctions.sayHelloArrow())
console.log(arrowFunctions.double(19))
console.log(arrowFunctions.person())