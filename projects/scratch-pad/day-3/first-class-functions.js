// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return function that tests whether value is greater then base
   return function(value){
    return value > base;
   } 
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    // return function that tests whether base is greater then value
   return function(value){
    return value < base;
    // YOUR CODE ABOVE HERE //
}
}
/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    let newChar = startsWith.toUpperCase()
    // return function that tests whether a given string starts with charater arg
    return function(string){
        let newStr = string.toUpperCase()
        if (newStr[0] === newChar){
            return true
        }
        else{
            return false
        }

    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    let newChar = endsWith.toUpperCase()
    // return function that tests whether a given string ends with charater arg
    return function(string){
        let newStr = string.toUpperCase()
        if (newStr[newStr.length - 1] === newChar){
            return true
        }
        else{
            return false
        }
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //create empty array to store modified strings
    let newArr = []
    // create loop to select strings to modify
    for (let i = 0; i < strings.length; i++){
    // pass through each string and call function to modify them
    newArr.push(modify(strings[i]));
    }
    // return new array
    return newArr
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // // YOUR CODE BELOW HERE //
    // // create container to store test results
    // let arrFalse = [];
    // // create loop to select strings to test
    // for (let i = 0; i < strings.length; i++){
    //     // pass through each string and call function to test them
    //     if (test(strings[i]) === false){
    //     // return false if evaluates to false
    //         arrFalse.push(false);
    //     }  
    // }
    // // create conditonal statement that returns true or false
    // if (arrFalse[0] === false){
    //     return false;
    // }
    // else{
    //     return true
    // }
    // wanted to try to do it in an easier way
    return strings.every(test)
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
