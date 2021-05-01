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
    //here the stringNumbers string is splitted into separate array value based on the result of changeDelimeter func
    const splittedArgument = changeDelimeter(stringNumbers);
        
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