/* STEP1: writing a function to sum the numbers inside the string argument

A. i'm going to use SPLIT to remove the comma and separate the string-numbers into 3 different strings inside the array
B. i'm going to reduce combined with parseInt to convert the strings into numbers and to sum them
 */

function add(string) {

    let splittedArgument = string.split(",",2);
    let sum = splittedArgument.reduce((total, currentValue) => {
        return parseInt(total) + parseInt(currentValue);
    })
    return sum;
}

console.log(add(""));