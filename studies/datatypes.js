/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
 * Java Script Data Types
 * Data types exist in all modern coding languages. Each data type has slightly different rules, and they inform
 * the program on how to handle the different types of data.
 * Because JavaScript is a weakly typed dynamic language when using a variable assignment there
 * is no need to "tell" the program what type of data you are assigning it.  This also means
 * that variables can be reassigned to different data types.
 */
let typ = "number";
typ = 12356;
typ = [a, r, r];
console.log(typ); /// [a,r,r]
Array.isArray(typ); // true
/**
 * Data types are broken down into two catagories, simple and complex data types.
 * All the data types in JavaScript that are not Objects are simple data types
 * Simple data types are immutable, that is they cannot be altered and when copied
 * are copied by value not reference.
 * The following are all simple data types
 */
//Numbers, these numbers are not in a string and are easier to preform math on
let num = 1237345;
//Strings are composed of characters enclosed in either ", ', or `, quotes
let strn = "1234567, numbers in a string";
//Undefined indicates the absence of value
let undf;
console.log(undf); //Undefined
//null indicates the absence of an object it is the only primitive value
//that returns object when called with typeOf
console.log(typeof(null)) // 'object
//NaN is a type that occurs when a mathematical operation cant return a number
//Infinity and Negative Infinity: these are similar to the ideas of infinity and
//negative infinity in math.  When a number is too large of a value it will return infinity
//or if negative negative infinity
let Num = Number.MAX_VALUE * 2;
console.log(Num); //infinity
//Complex Data Types
/**
 * All complex data types fall under the rubric of "Objects".  Its important to remember
 * however that Objects, Arrays, and Functions are all objects in JavaScript.
 * Objects are referenced by an identifier, which means that multiple variables can
 * be assigned to the same reference without creating new spaces in memory.
 * Unlike primitive data which is always reassigned a new place in memory when assigned
 * Unlike primitive data types complex data types are mutable 
 */
//Functions
//Functions make up the bulk of what we think of as the "program" in programing.
//when they are declared their values are stored in memory but in order to be 
//used by the program they must be executed or called.  They have optional parameters
//that at runtime are substituted for 'arguments'
function logged(parameter){
    console.log(parameter)
}
//nothing is logged to the terminal
logged('argument');//'argument' is logged to the terminal
//Arrays
// In JavaScript arrays are a list of values stored in an ordered fashion separated by commas and
/** encapsulated with brackets. The values can be any data type and data types can be mixed. 
 */
let newArr = [1, 2, 3, {'object': true}, ['another array']];
/**
 * Arrays are 0 indexed which means the first item in the array is at the 0 index
 * the elements in the array can be accessed through bracket notation
 */
console.log(newArr[0]) // 1
/**
 * Objects
 * Objects are a list of key/value pairs.  They are not ordered in the same manner as Arrays
 * they can be accessed thought dot notation or brackets, through their key properties.  Objects
 * are encased in curly brackets and like Arrays values can be any data type although keys are
 * inevitably strings. Functions that exist in objects are referred to as methods
 */
let newObj = {
    prop : 'Value',
    method : function(){ console.log("I'm a method")}
}
newObj.method()// logs "I'm a method"
/**
 * Copy By Value vs Copy by reference
 *  All primitive data types are copied by value, that means that when a Copy
 * is made, by assigning multiple variables to each other, there is a new place
 * created in memory that holds the value assigned to the variable. All
 * complex data types are copied by reference. The reference refers to any new variables
 * that are created reference the originals place in memory.  When you change the values
 * inside the complex data type it is reflected in all of the variables pointing to it.
 * 
 *Copy by Value
 */
//initial statement
let g = 1
//copy is made
let h = g
// h is reassigned to 5
h = 5
console.log(h)// 5
console.log(g)//1 
//Copy by Reference
//original statement
let obj1 = {a : true};
//copy oj1 one to obj2
let obj2 = obj1;
//change obj2
obj2.a = false;
console.log(ob1) // {a: false} this reflects the fact that it is copied by reference
//when a key value is changed on obj2 it points to the same place in memory as obj1
// therefor the changes will be reflected in both variables

