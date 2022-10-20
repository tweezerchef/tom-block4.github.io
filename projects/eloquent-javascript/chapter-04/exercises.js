////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, int = 1) {
var arr = [];
//if same 
if(start === end){
   return arr;
 }
 // if  
 if(int !== undefined){
   if(int < 0){
     return arr;
   }
   for(let i = start; i <= end; i += int){
     arr.push(i);
  }
 }else
{
  for(let i = start; i <= end; i++){
    arr.push(i);
 }
 }
return arr;
}
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  
return arr.reduce(function(sum, el,){
  return sum + el;
}, 0)
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr, newArr = []) {

 arr.forEach(element => newArr.unshift(element));
return newArr
  }

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  
 for(let i = 0; i < Math.floor(arr.length / 2); i++){
  // console.log(arr[i]) 
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i] 
  arr[arr.length - 1 - i] = temp
 }
  
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
