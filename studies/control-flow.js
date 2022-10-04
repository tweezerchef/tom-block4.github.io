/**
 *  Control Flow
 * Controll flow is the order in which the script is executed similar to the order of
 * operations in math.
 * The script is executed from top to bottom but several conditions will cause the 
 * program to pause while executing certain tasks
 * It is up to the developer to create functions, loops, and conditional statements
 * that change the normal top to bottom order and 'decide' what should be executed and where.
 * Conditonal statements will create conditions that tell the computer what to execute. 
 * These conditional statements are given paramaters that either evaluate to true or false.
 * for an if statement if the condition evalatues to true the code block asociated with the conditon
 * will execute, and if false will resume its normal interpritation of the script from top
 * to bottom.
 * Switch statements operate in a similar manner, when they evaluate to true the code block ascociated
 * with them is executed, when it hits the break keyword in the code block it exits the conditional
 * tree.
 */ 
//if eveluates to true or false running a code block if true, if this is not followed
//by an esle or else if statement the script continues to run in condition is evaluated to 
//false
let a = 2
if ( a === 2){
    console.log('true');
}
//the script would the move to the next line of code weather the code block is executed or not
// else-if when followed by a false evaluation from the initial 'if' stament
// determines if this second condition is true and similarly will exit the conditional tree
// when not follwed by another conditional statement
else if (a === 5){
    console.log('true');
}

// else

// switch
 
 

