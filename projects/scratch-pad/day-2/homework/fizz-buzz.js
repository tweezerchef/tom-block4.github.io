// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // create a counter using a loop to create a variable that will increase from 1 - 100
    for (let i = 1; i < 101; i++){
    // create a condition using the remader operartor for to print fizzbuzz 
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    }
    // create a condition using the remader operartor for to print fizz
    else if (i % 3 == 0){
        console.log('Fizz');
    }
    // create a condition using the remader operartor for to print buzz
    else if (i % 5 == 0){
        console.log('Buzz');
    }
    // create a default condition that prints the variable i
    else{
        console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}