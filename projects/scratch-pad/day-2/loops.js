// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
 function printArrayValues(array){
  // YOUR CODE BELOW HERE //
  // create loop for array and console.log values
  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
// YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
 function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //create a loop that console.logs an arrays value in reverse
  for (let i = array.length - 1; i > -1; i--){
    console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //create empty array to store objects keys
  let arr = [];
// loop through object and push to array arr
  for (let key in object){
  arr.push(key);
}
  // return aray
  return arr;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // create a for in loop that logs and obect keys
  for (let key in object){
    console.log(key)
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create empty array
  let arr = [];
  //create loop that pushes an objects key values into arr array
  for (let key in object){
    arr.push(object[key]);
  }
  //return arr
  return arr;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // creat for in loop that loops over objects keys and prints its values
  for (let keys in object){
    console.log(object[keys])
  }
   // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // use a variable counter keySum to return the number of keys in a for in loop
  //create variable
  let keySum = 0 
  //run loop
  for (let key in object){
    keySum++
  }
  // return keySum
  return keySum
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var values = [];
  //iterate through object w/ for in loop and push to values array
  for (let key in object){
    values.push(object[key]);
  }
  // create for loop that console logs values in reverse
  for (let i = values.length - 1; i > -1; i--){
    console.log(values[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
