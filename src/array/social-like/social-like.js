/*
Create a function `getLikes` which receives an array of names, and returns:
* [] => "Be the first to like this"
* ["Cartman"] => "Cartman likes this"
* ["Kenny", "Cartman"] => "Kenny and Cartman like this"
* ["Stan", "Kyle", "Kenny", "Cartman"] => "Stan and 3 other people like this"

*/

// TODO add your code here

function getLikes(arr) {
    if (!arr || arr.length === 0) {
        return("Be the first to like this");
    }

    else if (arr.length === 1) {
        return (`${arr[0]} likes this`);
    }

    else if (arr.length < 3) {
        let likes = "";
        for (let i = 0; i < arr.length; i++){
            if (i !== arr.length - 1) {
            likes += arr[i] + " and ";
            }
            else {
                likes += arr[i];
            }
        }
        return (`${likes} like this`);
    }
    else {
        return (`${arr[0]} and ${arr.length -1} other people like this`);
    }
}

module.exports = getLikes;
