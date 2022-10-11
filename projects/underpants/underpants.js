// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
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
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
//create a function which takes in an array and a number as parameters
_.first = function(array, num){
    // create empty output of array
   let newArr = [];
    // if array is not an array or is number is negative return []
    if (!Array.isArray(array) || num < 0){
        return [];
    }
    //  else if number isnt a number return array[0]
    else if (typeof num !== "number"){
        return array[0];
    }
    //test if number greater then array length return array
    else if (num >= array.length){
        return array;
    } 
    // if it passes the test return the the first "num" of elements in array
    else{
        // create loop to output number entered
        for (let i = 0; i < num; i++){
            newArr.push(array[i]);
        }
        //return new aray
        return newArr;
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
//create funtion that takes in two arguments array and a number
_.last = function(array, num){
 // create empty output of array
 let newArr = [];
 // if array is not an array or is number is negativee return []
 if (!Array.isArray(array) || num < 0){
     return [];
 }
 //  else if number isnt a number return last element of array
 else if (typeof num !== "number"){
     return array[array.length - 1];
 }
 //test if number greater then array length return array
 else if (num >= array.length){
    return array;
}
// create a loop that creates a negative number from num and adds until - num reaches 0
else{
    for (let i = array.length - num; i < array.length; i++){
        newArr.push(array[i]);
    }
}
 return newArr
}
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
//create a function with two arguments a array and a value
_.indexOf = function(arr, val){
// create loop that loops through array
for (let i = 0; i < arr.length; i++){
    // create if statement that tests if val = arr[i] and returns index #
    if (arr[i] === val){
        return i
    }
}
// return -1 if value not found
return -1
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
// create a contains function that takes in an array and value as args
_.contains = function(arr, val){
    // create empty array do push returns into
    let result;
    // create loop for arr
    for (let i = 0; i < arr.length; i++){
    // use ternary operator to return true if true
    arr[i] >= val ? result = true : result = false;
    }
    return result;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){
    //test if collection is a array
    if(Array.isArray(collection)){
    //call input function on each ellement of array
      for (let i = 0; i < collection.length; i++){
        func(collection[i], i, collection);
      }
    }
// esle for object
    else{
        //invoke input func of each key in object
        for(let key in collection){
            //invoke function
            func(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    let newArr = [];
    let testObject = {};
    //create loop to take an element from test array
    for (let i = 0; i < array.length; i++){
        // create test to see if array element alreay exists in object, if not add to object
        // and newArr
        if(array[i] in testObject === false){
            testObject[array[i]] = 'true';
            newArr.push(array[i]);
        }
    }  
    //return new array
    console.log(testObject)
      return newArr;
    }



/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
//  create a new function "filter" that takes an arr and a func
_.filter = function(arr, func){
    // create a new array of elements to return
    let newArr = [];
//call <function> for each element in <array> passing the arguments:
//      the element, it's index, <array> for loop to go through array
 for (let i = 0; i < arr.length; i++){
   if (func(arr[i], i, arr)){
    // return a new array of elements for which calling <function> returned true
    newArr.push(arr[i]);
}
 }
    //return new arr 
   return newArr;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
// reject function takes a array and function as arguments
_.reject = function(arr, func){
    // create empty output array
    let newArr = [];
//call <function> for each element in <array> passing the arguments:
//      the element, it's index, <array> for loop to go through array
for (let i = 0; i < arr.length; i++){
    if (func(arr[i], i, arr) === false){
     // return a new array of elements for which calling <function> returned false
     newArr.push(arr[i]);
 }
  }
     //return new arr 
    return newArr;
 }



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
// create a function "partition" that takes in the arguments array and function
_.partition = function(arr, func){
    // create empty output nested array
    let newArr = [[],[]];
//call <function> for each element in <array> passing the arguments:
//      the element, it's index, <array> for loop to go through array
for (let i = 0; i < arr.length; i++){
    // if true
    if (func(arr[i], i, arr)){
     // return a new array of elements for which calling <function> returned false
     newArr[0].push(arr[i]);
 }
  //if false
  else {
    newArr[1].push(arr[i]);
  }
}
     //return new arr 
    return newArr;
 }



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
// create a function 'map' that takes a collection and a function as args
_.map = function(collec, func){
    // create return array
    let newArr = [];
    // if collection is array use for loop to 
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
    if(func === undefined ){
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if collection[i] is truthy
                if(!collection[i]){
                    //return false;
                    return false;
                }
            }
        } else { //else
            //iterate through object
            for(let key in collection){
                //determine if collection[key] is truthy
                if(!collection[key]){
                    //return false;
                    return false;
                }
            }
        }
    } else{ //else
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if invoking func on the params is false
                if(func(collection[i], i, collection) === false){
                    //return false
                    return false;
                }
            }
        } else{ //else its an object
            //iterate through object
            for(let key in collection){
                //determine if invoking func on the params is false
                if(func(collection[key], key, collection) === false)
                {   //return false;
                    return false;
                }
            }
        }
    }//return true
    return true;
     }
    

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
