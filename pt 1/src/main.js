var map = require('lodash/map');

function square(n) 
{
    return n*n;
}

// The map method calls the square function for every element in the array.  Returns a new array
// with the result.

console.log(map([2,4,6,8], square));