/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(arr, str){
// create for loop to loop through the index of arr
for(let i = 0; i < arr.length; i++){
    if(arr[i]['name'] === str){
        return arr[i];
    }
   }
   return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(arr, oldName, newobj){
    //create loop that looks for old name
    for(let i = 0; i < arr.length; i++){
       //if found replace entire object with new object
        if(arr[i]['name'] === oldName){
            return arr[i] = newobj;
        }
       }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(arr, name){
    // create a loop that looks for name
    for(let i = 0; i < arr.length; i++){
        //if found replace entire object with new object
         if(arr[i]['name'] === name){
             return arr.splice(i);
         }
        }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(arr, newObj){
    // create a test for name and species length
    if(newObj.name.length > 0 && newObj.species.length > 0){
    //create a loop that goes through and test for same name in array
        for(i = 0; i < arr.length; i++){
        if(arr[i].name === newObj.name){
            return;
        }
        }
        arr.push(newObj);
    }
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
