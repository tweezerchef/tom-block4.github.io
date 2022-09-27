// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
/*
I: a string
O: a new string that is the reverse of old string
C:must be string
E:not a string or empty string
*/


function reverseString(input){
    // YOUR CODE GOES BELOW HERE //
    // create empty array to temp store reverse string
    let rString = [];
     //create temp array to hold initial string input
    let tempInput = input.split('');
    // create exception that test that input is a string and not empty
    if (typeof input != "string" || input === ""){
      return "not a valid input";
    }
   //if string is a string and isnt an empty string create a loop and reverse it  
   else{
    for (let i = 0; i < tempInput.length; i++){
     rString.unshift(tempInput[i]);
    }}
  // create new string from the rstring array
  let newStr = rString.join("");
  // return new string
  return newStr;
   }
   
     

     
    
    
    
    // YOUR CODE GOES ABOVE HERE //





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}