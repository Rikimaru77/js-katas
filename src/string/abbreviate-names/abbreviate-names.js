/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add your own tests.

*/

// TODO add your code here

function abbreviate(string) {
    
    if(!string) {
        return (null);
    }

    let abbreviateName = string[0].toUpperCase();

    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            abbreviateName += ("." + string[i + 1].toUpperCase());
        }
    }
    return (abbreviateName);
}

module.exports = abbreviate;
