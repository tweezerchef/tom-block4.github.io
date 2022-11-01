/* eslint-disable no-unused-vars */
/**
 * Operators in JavaScript
 * There are several different types of operators, that serve many different proposes.
 * Generally though they interact with different values to create expressions.
 * The first type of operator we will talk about it assignment operators.
 * these work to assign a variable to an expression. 
 * The most basic assignment opperator is the = symbol which asigns the value to the right
 * side of it to the value on the left side.
 */
let a = "b";
console.log(a);//"b"
/**
 * other assignment operators are operators that modify and value to express a new value
 * x += num (add num to x and reassign x)
 * x -= num (subtract num from x and reassign x)
 * x *= num (multiply x times num and reassign x)
 * x /= num (divide x by num and reassign x)
 * x %= num ((remainder of num to x and reassign x))
 * x
 * some examples 
 */
let x = 1;// x = 1
x *= 5;// x = 5
x += 1 // x = 6 
x /= 2 //x = 3
/**
 * Arithmetic operators
 * arithmetic operators work almost identically to how the operate in standard
 * math 
 * 1 + 1 = 2; 
 * 2 * 2 = 4
 * 1 - 1 = 1
 * 1 / 1 = 1
 * 1 % 1 = 1
 * 
 * the ++ operator and -- operator are equivalent to + 1 and -1 respectively
 * 1++ = 2
 * 1-- = 0
 *  */
let y = 2 + 2 // y = 4
y = 6*6 //y = 36
/**
 * Comparison operators take two values and compare them to each other
 * They also perform a similar function as in regular mathematics comparing
 * the left had value to the right hand value.  They return a boolean value
 * of true or false.
 * == /equal
 * != /not equal
 * === /strictly equal
 * !== /strictly non equal 
 * > /greater then
 * < /less then
 * >= /greater then or equal to 
 * <= /less the or equal to
 * 
 * Some examples 
 */
5 == "5" //evaluates true
5 === "5" //evaluates false
5 !== "5" //evaluates true
5 > 4 //evaluates true
/**
 * Logical Operators
 * Logical operators are similar in some ways to conditional operators
 * and are often used together to chain conditional expressions. They also return
 * a boolean value
 * && : And: if left evaluates to true and right does as well return true
 * if either value evaluates to false return false
 * ||: Or: if either expression evaluates true return true, only return false if both expressions
 * return false
 * !: Not: this only takes one value and if it evaluates true return false else return true
 */
