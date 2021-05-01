/*
CHOOSEN METHOD:
A. i'm going to use SPLIT to remove the delimeters and separate the string-numbers into strings inside the array
B. i'm going to use reduce combined with parseInt to convert the strings into numbers and to sum them
 */

/**
 * @param {string} stringNumbers
 */
function add(stringNumbers) {
    /*two cases based on stringNumbers length:
    1. if there's one number or less like "" or "1": call oneArgument function 
    2. else: call checkAndSum to check different conditions and sum the values
    */
    return stringNumbers.length <= 1 ? oneArgument(stringNumbers) : checkAndSum(stringNumbers); 
}

function oneArgument(stringNumbers) {
      // if the string value is equal to "" the stringNumbers is equal to 0 else to the number found
      return stringNumbers === "" ? 0 : parseInt(stringNumbers) 
}   

function checkAndSum(stringNumbers) {
    //splittedArgument is an array of the splitted stringNumbers values based on the result of changeDelimeter func
    const splittedArgument = changeDelimeter(stringNumbers);
    // here the negativeArrayNumbers take all the negative numbers from splittedArgument
    const negativeArrayNumbers = splittedArgument.filter(e=>e < 0);
    //if there is some negative value throw error

        if(negativeArrayNumbers.length > 0) {
            throw new Error(`negatives not allowed:${negativeArrayNumbers.toString()}`);
        } else {
            // if there aren't negative values, here all the values founded into the splittedArgument array are summed
            return splittedArgument.reduce((total, currentValue) => {
                return parseInt(total) + parseInt(currentValue);
            })
        }
}

function changeDelimeter(stringNumbers){
    // if stringNumbers start with "//" than take the delimeter after them
    if(stringNumbers.substring(0,2) === "//") {
        const delimeter = stringNumbers.charAt(2);
        // return the string, starting from position 4 (ex.1;2), and split by delimeter selected
        return stringNumbers.substring(4).split(delimeter);
    } else {
        // in the other cases the delimeters are , and \n and the split accept this regex
        return stringNumbers.split(/[,\n]/)
    }
}

module.exports = {add};