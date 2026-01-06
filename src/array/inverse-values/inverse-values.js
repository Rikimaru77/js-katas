/*
Create a function `inverse`, which given an array of numbers, return the additive inverse of each : each positive becomes negatives, and the negatives become positives.

You can assume that all values are numbers.

If the argument is an empty array or null, return an empty array.

Example:
* [1, 2, 3, 4, 5] -> [-1, -2, -3, -4, -5]
* [1, -2, 3, -4, 5] -> [-1, 2, -3, 4, -5]
* [] -> []

Don't mutate the parameter.

*/

// TODO add your code here

function inverse(arr) {
    if (!arr || arr.length === null) {
        return([]);
    }
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = (arr[i] * -1);
    }
    return(result)
}

module.exports = inverse;
