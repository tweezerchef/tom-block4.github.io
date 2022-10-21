// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
//use .flat method to flatten array
  return array.flat()
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//fucntion should take a value, a test function, an update funciton, and a body
//function  Each iteration, it first runs the test function on the current 
//loop value and stops if that returns false. Then it calls the body function, 
//giving it the current value. Finally, it calls the update function to create a 
//new value and starts from the beginning.
// 
function loop(val, tstFunc, upFunc, bdyFunc) {
  for (let i = val; tstFunc(i); i = upFunc(i)) {
    bdyFunc(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
for (i = 0; i < array.length; i++){
  if(!test(array[i])){
    return false;
  }
}
return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection() {

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
