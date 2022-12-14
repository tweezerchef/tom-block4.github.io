/**
 * Functions
 * Functions are the nuts and bolts of JavaScript
 * They allow us to manipulate data and also create new data.
 * Functions are first declared, when the data of the function is stored.
 * When a function is to be used it must be executed or "called" 
 * Declaring a function 
 */
function logged(){
    console.log('function')
}
// function execution
logged() // function is logged to the console
// functions that are declared using the function keyword are called
//"named functions", and are available in the global scope
//functions can also be assigned to variables
var func = function(){
    console.log('var');
}
// to call the function
func() //'var' is logged to the console.
/**
 * Functions can also take in inputs, these are called parameters
 * We can also specify what they output with the return function.  Functions modify or call on
 * variables from the outside, but variables on the inside of functions can not be modified
 * or accessed from outside the function scope. One unique aspect of functions is that they can actually
 * return other functions, and even after the parent function has been called the returned
 * function can still access the parent functions variables 
 * 
 */
//declaring a function and assigning it parameter strng
let x = 5
let bigFunc = function(strg){
    let x = x + 5; 
    return strg + x//determining the our put
}
//calling the function and using 'string' as the argument, which takes the place of the parameter
bigFunc('string') //returns string 10
console.log(x) // '5' will be logged to the console
// functions can return functions and and also provide 'closure' for variables
function close(){
    let y = 10; 
    return function(x){
        return y + x
    }
}
let ret = close();
// ret now points to the returned function
ret(10);// ret now returns 20 it still has access to y even though close
//is no longer being invoked
/**
 * Closures in JavaScript
 * "In programming languages, closures (also lexical closures or function closures) are techniques for 
 * implementing lexically scoped name binding in languages with first-class functions. Operationally, 
 * a closure is a record storing a function[a] together with an environment:[1] a mapping associating each 
 * free variable of the function (variables that are used locally, but defined in an enclosing scope) with the
 *  value or reference to which the name was bound when the closure was created.[b]"  
 * -Wikipedia
 * A function that uses closures is able to access its parent functions variables even after the 
 * parent function has closed and is no longer on the call stack 
 * Example as follows
 */

function outer(){
    let a = "outer"
    return function inner(){
        console.log(a)
    }
}
let inner = outer();
inner() //console.logs 'outer'

/**
 * Scope in JavaScript
 * Scope refers to the availability of variables in different contexts.
 * There are three scopes Global, Function and Block.  Pre ES6 there was only
 * global and function scope with the only available variable keyword
 * being 'var', which was and continues to be globally and function scoped.
 * ES6 included two new keywords let and const, which can be block scoped as well
 * Some examples as follows 
 */

let y = 'yes';
if(y === yes){
    var x = 'no'
    y = 'no'
    let z = 'nono'
}
console.log(x)//'no' because var is not block scoped it is available globally
console.log(y)// 'no' because even though l is locally scoped it is able to access
//  the globaly declared y variable and change it
console.log(z)//reference error because we are using let z is not available when called 

