/**
 *  Control Flow
 * Control flow is the order in which the script is executed similar to the order of
 * operations in math.
 * The script is executed from top to bottom but several conditions will cause the 
 * program to pause while executing certain tasks
 * It is up to the developer to create functions, loops, and conditional statements
 * that change the normal top to bottom order and 'decide' what should be executed and where.
 * Conditional statements will create conditions that tell the computer what to execute. 
 * These conditional statements are given parameters that either evaluate to true or false.
 * for an if statement if the condition evaluates to true the code block associated with the condition
 * will execute, and if false will resume its normal interpretation of the script from top
 * to bottom.
 * Switch statements operate in a similar manner, when they evaluate to true the code block associated
 * with them is executed, when it hits the break keyword in the code block it exits the conditional
 * tree.
 */ 
//'if' evaluates to true or false running a code block if true, if this is not followed
//by an else or else if statement the script continues to run in condition is evaluated to 
//false
let a = 2
if ( a === 2){
    console.log('true');
}
//the script would the move to the next line of code weather the code block is executed or not

// 'else if' when followed by a false evaluation from the initial 'if' statement
// determines if this second condition is true and similarly will exit the conditional tree
// when not followed by another conditional statement
else if (a === 5){
    console.log('true');
}
// 
// 'else': else is typically the default conditional statement. It doesn't evaluate a condition
//as true or false. Instead it is used when all of the previous statements have evaluated to
//false. It simply executes its associated code block
else{
    console.log('I am not designed to evaluate that number');
}
// switch statements
/* switch statements are another way to evaluate a given condition as true or false and 
run a given code block if true.  If true you must include a 'break' keyword in order for the
program to stop evaluating and return to the rest of the script. 'case' is the keyword used to
test the condition. Below is an example
*/
let weth = 'rainy';
switch (weth) {
  case 'hot':
    console.log('Put on a tee shirt');
    break;
  case 'rainy':
    console.log('Put on a raincoat');
    break;
  default:
    console.log('No idea what you should wear');
}

 

