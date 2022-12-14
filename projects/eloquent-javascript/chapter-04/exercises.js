////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, int = 1) {
var arr = [];
//if same  or less then 0 or undefined return arr
if(start === end || int < 0 || int === undefined){
   return arr;
 }
//create array
 for(let i = start; i <= end; i += int){
     arr.push(i);
  } 
  //return array 
  return arr;
}
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
 //use .reduce to return sum 
return arr.reduce(function(sum, el,){
  return sum + el;
}, 0)
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr, newArr = []) {
//use for each to push the elements in reverse order into array
 arr.forEach(element => newArr.unshift(element));
return newArr
  }

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  // for loop that loops through half on an array if odd Math.floor will round down
  for(let i = 0; i < Math.floor(arr.length / 2); i++){
   //create placeholder for element we are removing
    let temp = arr[i];
    //replace the element at i with the element opposite i
    arr[i] = arr[arr.length - 1 - i] 
    //replace the opposite i with temp
    arr[arr.length - 1 - i] = temp
 }
//return modified array
 return arr;
}  


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;
  for (let i = array.length - 1; i >= 0; i--){
    rest = { value: array[i], rest: rest };
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, newArr = []) {
  //base
  if (list.rest === null){
    newArr.push(list.value)
    return newArr
  }
  // pust the list objects value at 'value' into array
    newArr.push(list.value)
  //recursion
    return listToArray(list.rest, newArr)
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, obj) {
  //change list to array
  let newArr = listToArray(obj);
  // add element to array
  newArr.unshift(element);
  // convert array back to object
  return arrayToList(newArr);
}


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(obj, value) {
  //if value is less then 0 return undefined
  if(value < 0 ){
    //return undefined
    return undefined;
    //run if both check are false
  }
  //create a variable that holds the given object as an array
  var arr = listToArray(obj);
  //if the value is defined return 
  if(arr[value] !== undefined){
    //return the curent value in indexreturn arr[value];
    return arr[value]}
  //otherwise return undefined
    else{
    return undefined
  }
  }





  
////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
// determine if x + y
  if (typeof x !== 'object' && typeof y !== 'object'){
  return x === y;
}
  if (typeof x !== 'object' || typeof y !== 'object'){
    return false
  }
// we know we are dealing with complex datatypes
// craate array of keys
let xKeys = Object.keys(x);
let yKeys = Object.keys(y);
//check for length
if (xKeys.length !== yKeys.length){
  return false;
}
// iterate through x keys array;
for (let i = 0; i < xKeys.length; i++){
  if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
    return false;
}
}
return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
