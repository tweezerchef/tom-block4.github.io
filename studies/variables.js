/**
 * Variables
 * Variables are a way to reference a place in memory, where a value is stored, with a human readable word or
 * or words. Variables are statement and the values they hold are expressions.
 * There are three commonly used keywords to signify a variable is being assigned, let, var and scope
 * When naming a variable most 
 * When declaring a variable all that is needed is the desired keyword followed by a space and then the name you would like to use
 * These names should always start with a alphabetic character, by tradition all variables should start with a lowercase character
 * also its considered a best practice to use whats called "camel casing". As discussed always start with the first letter in lower case.
 * After the initial character you should uppercase any subsequent character that is the first character in either a new world,
 * a new abbreviation for a word, or just to signify a logic linguistic break from the preceding character.
 * Certain keywords that are used in JavaScript in a functional manner, such as let, var, const, function, etc, as well as some that are reserved
 * for use in future versions of JavaScript.  Generally one should avoid naming variables with words, that although may not be reserved
 * preform or denote actions or ideas within the JavaScript code.  Such as "array", "object", 'string' etc  \
 * some examples of good naming practices are as follow
 * (instead of using array, object or string): obj, arr, ary, strg, s, a1, str!
 * (examples of using camelCasing) objOfArr, arrOfA, strngOne 
 * (more clearly named) strOfWords, sumOfArr, animal, name, etc
 * 
 * 
 * Declarations
 * to declare a variable all that is needed is the chosen keyword followed by the name, however when simply declaring the
 * variable and not assigning a value only let and var may be used
 * */
 let a;
 var bee;
/** 
 * Assignment
 * When assigning a variable to a new variable use let, var or const, followed by the desired variable name, followed by the equals sign, followed by the value you
 * would like assigned. For variables that have already been declared all that is necessary is the variable name, followed by the equals sign, followed by the value you
 * would like to assign
  * */
 let bar = "foo";
 a = "bar";
 var bee = "foo";
 const con = 'constant variable'
 let obOne = {key : "value", ["pair"] : true};
/**
 * Differences Between Var, Let, Const, and Hoisting
 * As previously discussed var and let can be declared without being assigned while const
 * requires an assignment.
 * Hoisting: Hoisting in JavaScript refers to where within a global or local memory context where different variables are accessible from and
 * in turn where within the same contexts their declared names are stored. There are two ways to "wrap" variables, if one would like to keep them outside of the
 * global scope. In code blocks, which are used in loops and and conditional statements, or in functions.
 */
 console.log(name)//undefined
 // the variable 'name' has been hoisted but is value has not
 var name = "tom"
 console.log(name)// "tom" 
 // the variable name has been hoisted and its value has been as well  
 
/* Var: "vars" declared outside of functions will be globally scoped.  The JavaScript compiler,
 * when making its initial pass through the application takes all globally scoped "var" decelerations and hoists them into
 * global memory where there definitions can be accessed at any point during runtime.  
 * However their assignments will not be available in the program until after the variable is assigned in 
 * the normal top to bottom fashion. Vars can be reassigned and redeclare. 
 */ 
 var comp = "computer";
 comp = 6;
 console.log(comp) // 6
 var comp = "comp";
console.log(comp) //"comp"
/** Pre ES6 vars were the only available variable type, since then best practice usually calls for the var keyword not to be used.
 * In general it is best to not use global variables. For both security and memory issues.
 *  Instead the two new variable key words "let" and "const" are used.
 * 
 * Const: when using the const keyword to create new variables we differentiate the const definitions and assignments as
 * "constants" which is the what the "const" key word abbreviates. when we use const in the global context, on the first pass of the 
 * JS interpreter. On the second pass through, the execution phase, if const is declared in the global scope it will be available in 
 * global memory. How every if it is written inside a code block or function it will be hoisted lexically. 
 * Some examples 
 */
const global = 'available globally';
function constants(){
    const locally = 'available locally';
}
console.log(locally) //reference error locally is not defined
for (const i = 0; i < 1; i++){
    console.log('available locally');
}
if( global ==='available globally'){
    const locally = 'locally scoped';
}
console.log(locally) //reference error locally is not defined
/**
 * Constants can not be reassigned or redeclared, but if the constants values are objects or arrays those data types 
 * can be manipulated. Also as previously discussed constants always need to be assigned
 * Examples  
 */
const str = "string"; // ok
const str = "another string"; // not ok
str = "another nother string"; //not ok
const newStr; //also not ok
const newNewStr = "ok";

/** 
 * Let : the let keyword plays a similar role to a const but it can be declared without assignment,
 * , it cannot be redeclare but it can be reassigned, and like const has the same scoping properties
 * Examples 
 */
let newVar //ok;
let newVar = "not ok"; //not ok
newVar = "ok"; //ok


