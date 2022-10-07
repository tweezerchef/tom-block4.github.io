
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  for (let pound = "#"; pound.length <= num; pound+="#")
  {console.log(pound);}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (let number = 1; number <= 15; number += 1) {
    if (number % 3 == 0 && number %5 != 0){
      console.log("fizz");
    }
    else if (number % 5 == 0 && number % 3 !== 0){
      console.log("buzz");
                  }
    else if (number % 5 == 0 && number % 3 == 0){
       console.log("fizzbuzz");}
    else {console.log(number);} 
    }
         
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  //at top of function scope create empty string
    let chessStr = '';  
  // create loop for number of rows
  for (let row = 0; row < num; row++){
    // create loop for creating each row
    if (row % 2 === 0){
    for (let line = 0; line < num; line++){
      // create conditonal statement to test if row + strRow is even or odd
      if (line% 2 === 0){
        chessStr+=" ";
      }
      else if (line% 2 !== 0){
        chessStr+="#";
      }}
     //console.log(chessStr)
    }
   if (row % 2 !== 0){
    for (let line = 0; line < num; line++){
      // create conditonal statement to test if row + strRow is even or odd
      if (line % 2 === 0){
        chessStr+="#";
      }
      else if (line % 2 !== 0){
        chessStr+=" ";
      }}
     //console.log(chessStr)
    } 
    // at end of outer loop create line break
   chessStr+= "\n";
  }
  
    // return completed string
    console.log(`${chessStr}`)
  }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
