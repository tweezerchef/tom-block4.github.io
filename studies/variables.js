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
 * 
 * Var: "vars" declared outside of functions will be globally scoped.  The JavaScript compiler,
 * when making its initial pass through the application takes all globally scoped "var" deceleration and hoists them into
 * global memory where there definitions can be accessed at any point durring runtime.  However their assignments will not be availible
 * until after the variable is asssigned in the normal top to bottom fashion. 
 * 
 */



