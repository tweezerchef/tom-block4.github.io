// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    return Array.isArray(value);
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //test if object is object, not an array, not null and not a date return true
    if(typeof value === 'object' && Array.isArray(value) !== true && value !== null &&  value instanceof Date !== true ){
        return true;
    }
    //otherwise return false
    else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
   // create test that determines if value is an object or array but not null or date
   //and return true if true 
    if (typeof value === "object" && value !== null &&  value instanceof Date !== true ){
        return true;
    }
    //otherwise return false
    else{
        return false
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // create test for objects and arrays returning string of either object or array
    if(typeof value === 'object' && Array.isArray(value) !== true && value !== null &&  value instanceof Date !== true ){
        return 'object';
    }
    // create test for array and return array
    else if (typeof value === "object" && value !== null &&  value instanceof Date !== true ){
        return 'array';
    }
    // create test for date
    else if (typeof value === "object" && value !== null && value instanceof Date === true && Array.isArray(value) !== true ){
        return "date";
    }
    //test for null
    else if (typeof value === "object"){
        return "null";
    }
    //test for string
    else if (typeof value === "string"){
        return "string";
    }
    // test for undefined
    else if (typeof value === "undefined"){
        return "undefined";
    }
    //test for number
    else if (typeof value === "number"){
        return "number";
    }
    //test for boolean
    else if (typeof value === "boolean"){
        return "boolean";
    }
    
    //test for function
    else if (typeof value === "function"){
        return "function";
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
