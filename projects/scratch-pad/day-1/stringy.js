// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    // return length of string paramater
return string.length;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // convert string to lowercase and return new lowercase string
    let newstr = string.toLowerCase();
    return newstr;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
// change string to lowercase in a new string and return new string
    let newstr = string.toUpperCase();
    return newstr;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
// create a new string which converts spaces into dases
    let strLower = string.toLowerCase();
    let newStr = strLower.replaceAll(" ","-");
    return newStr;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
/*
I: string
O: return true or false based on fist letter of string paramater and  char parameter
C: not case sensitve
E    n/a?
*/
    // YOUR CODE ABOVE HERE //
 // convert parameters to uppercase so that result is not case sensitive
    let strUpper = string.toLowerCase();
    let charUpper = char.toLowerCase();
    //compare first letter of strUpper to char upper return true if true
    if (strUpper[0] == charUpper){
        return true;
    }
    // return false if !true 
    else{
        return false;
    }

}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
 // convert parameters to uppercase so that result is not case sensitive
 let strUpper = string.toLowerCase();
 let charUpper = char.toLowerCase();
 //compare last letter of strUpper to char upper return true if true
 if (strUpper[strUpper.length - 1] == charUpper){
     return true;
 }
 // return false if !true 
 else{
     return false;
 }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
I: two strings
O: one string that concates the two inputs togther
C: return one string
E: ?

*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // create and return one string of stringOne + stringTwo concatenated
    let newStr = stringOne + stringTwo;
    return newStr


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // take arguments in array and out put concotinadted string 
    let argString = args.join("");
    return argString; 
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // compare strung leghts one and two if one is bigger output one
    if(stringOne.length > stringTwo.length){
        return stringOne;
    }
    // if two is bigger output two
    else{
        return stringTwo;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
I: two strings
O: 1 if first string is first in alphabet -1 if second is and 0 if they are equal
C:
E: 


*/
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
   // use built in method to compare two strings output -1 if return of method is 1
  if (stringOne.localeCompare(stringTwo) == 1){
    return -1;
  }
  // return 1 if method returns -1
  else if (stringOne.localeCompare(stringTwo) == -1){
    return 1;
  }
  // if equal return 0 
  else if (stringOne.localeCompare(stringTwo) == 0){
    return 0;
  } 
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // use built in method to compare two strings output -1 if return of method is -1
    if (stringOne.localeCompare(stringTwo) == -1){
        return -1;
      }
    // return 1 if output of method is 1
      else if (stringOne.localeCompare(stringTwo) == 1){
        return 1;
      }
      //return zero if output is 0 
      else if (stringOne.localeCompare(stringTwo) == 0){
        return 0;
       }


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
