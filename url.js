/**
 * This program demonstrates about the use case of url module
 * 
 */
const url = require('url');

const address = "https://somedomain.com/address/v1/api/login?email=someone&password=1234";

const query = url.parse(address, true);

console.log(query.host);  // Prints the hostname [excluding protocol]
console.log(query.path);  // Returns the full endpoint path
console.log(query.pathname); // Returns only endpoint
console.log(query.search); // Search query

const { email, password } = query.query;  // destructuring data

console.log(email, password); // Printing data