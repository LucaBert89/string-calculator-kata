/* STEP1: writing a function to sum the numbers inside the string argument

A. i'm going to use SPLIT to remove the comma and separate the string-numbers into 3 different strings inside the array
B. i'm going to reduce combined with parseInt to convert the strings into numbers and to sum them

C. 
 */

/**
 * @param {string} stringNumbers
 */
function add(stringNumbers) {
    // case there is only one number as string inside the string argument like "" or "1" 
    if(stringNumbers.length <= 1) {
       return oneArgument(stringNumbers);
    } else {
    //case there are more than one number as string inside the string argument like "1,2"
    //here the stringNumbers string is splitted into separate array value
        const splittedArgument = stringNumbers.split(",");
        // here all the value founded into the splittedArgument array are summed
        return splittedArgument.reduce((total, currentValue) => {
            return parseInt(total) + parseInt(currentValue);

        })
    }
}

function oneArgument(stringNumbers) {
      // if the string value is equal to "" the stringNumbers is equal to 0
      if(stringNumbers === "") {
        return 0;
    } else {
    // if there is only one number passed as argument than stringNumbers is equal converted into a number
        return parseInt(stringNumbers);
    }
}   

module.exports = {add};