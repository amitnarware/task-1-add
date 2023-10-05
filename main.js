// main.js
const products = require('./products');
const pricing = require('./pricing');
const categories = require('./categories');
const { generateExpectedResult } = require('./functions');

// Call the function to generate the expected result
const expectedResult = generateExpectedResult(products, pricing, categories);

// Display the result
console.log(expectedResult);
