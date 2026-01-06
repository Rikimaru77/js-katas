/*
Create a function `sum` which returns the sum of all odd values contained in a number array.

If the array is empty or null, return zero.

Example:
* [] -> 0
* [1, 2, 3] -> 4

*/

// TODO add your code here

function sum(arr) {
    if (!arr) {
        return(0);
    }
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        let tmp = arr[i];
        if (tmp % 2 !== 0){
            x = x + tmp;
        }
    }
    return (x);
}

module.exports = sum;
