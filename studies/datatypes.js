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
let num = 1237345
//Strings are composed of characters enclosed in either ", ', or `, quotes
let strn = "1234567, numbers in a string"
 //Undefined indicates the absence of value
 let undf;
 console.log(undf) //Undefined
 
