/**
 * Loops In JavaScript
 * Loops in JavaScript allow one to iterate within user defined boundaries
 * Loops are most often used to access values in arrays, objects and occasionally
 * strings.  After defining the parameters for a loop the user can then define,
 * within the given code block what the loop should preform on each iteration   
 * format is roughly as follows loop keyword, parameters encased in parentheses, 
 * followed by code block encased in curly bracket
 * 
 * keyword (parameters){
 * code block}
 * The three most common loops are while, for and for in loops
 * For loop
 * For loops are generally used it iterate through arrays although they can be used
 * on strings as well.
 * to create a for loop use the 'for' keyword, folowed generall by three parameters in parentheses
 * first assign a variable to the number you would like the loop to being from; then the condition
 * that the loop will continue to run under if they remain true, followed by the the action yould would
 * like the loop to preform on the iterator of each function, folowed by the code block 
 * As follows   
 */
for (let i = 0; i < 3; i++){
    console.log(i);
} //prints 0, 1, 2
/**
 * While Loop
 * The while loop behaves similarly however the only required parameter is
 * the condition in which the loop should run if it remains true.  They are best used when the
 * author knows exactly how long the condition should run for
 * Example
 */
let c = 10;
while(c > 1){
    c--;
    console.log(c);
} // prints 9, 8, 7, 6, 5, 4, 3, 2
//both of these loops can be used for looping through an array, both forwards and backwards
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}// prints 'a', 'b', 'c', 'd', 'e', 'f'
for (let i = arr.length - 1; i > 0; i--){
    console.log(arr[i]);
} // prints 'f','e','d','c','b','a'
/**
 * For In Loops
 * for in loops are use mostly to iterate through an objects
 * to create on use the 'for' keyword followed with a variable deceleration which will be used
 * to represent the value of a each key in the object,followed by the 'in' keyword,
 * followed by the object the loop will iterate over
 */
let obj = {a: true, b: false};
for (let key in obj){
    console.log(`${key}: ${obj[key]}`)
}// prints a: true b: false
