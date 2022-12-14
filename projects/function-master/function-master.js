//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  //use .values object method to take objects values and convert to array
    return newarr = Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
  //create empty array tp push keys into
    let arrStr = [];   
  //push keys into empty array with for loop
    for(let key in object){
    arrStr.push(key);
  }
  // use .join method to return a string from the array
  return newStr = arrStr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
   //create empty array to push keys into
    let arrStr = [];   
    // us for in loop to push values and use coditional statement to make sure those values are strings
    for(let key in object){
       if (typeof object[key] === 'string'){ 
        arrStr.push(object[key]);
    }
}
// return string using .join method
return newStr = arrStr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // use Array.isArray to test if it is array and return true if it is
    if (Array.isArray(collection)){
        return 'array';
    }
    else{
        return 'object'
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // chain together methods to return a new string with the first letter uppercase
    // .charAt selects the first character makes a copy then .toUppecase to uppercase
    // that first character .slice(1) takes the rest of the string, coppies it and the +
    //operator concatinates it with the uppercased first letter
    let newStr = string.charAt(0).toUpperCase() + string.slice(1)
    return newStr
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // convert string to array
    let strArray = string.split(" ")
   // create empty array to push capitalized words into
   let strArrayNew = [];
    // loop through each element and uppercase each words first character
    for(let i = 0; i < strArray.length; i++){
        strArrayNew.push(strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1));
    }
   //convert srtArray to a string and return
   let newString = strArrayNew.join(" ")
   return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//take and object with name property and convert its value to a string

return "Welcome" + " " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//using same methods return a string with the Name and Species uppercased
function profileInfo(object) {
  return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //check if object has a noises property
    if ('noises' in object && object.noises.length !== 0){
        return object.noises.join(" ");
    }
    else{
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// convert string to array
let strNew = string.split(" ");
// test for word  note: alternativly I could use a loop with === word
    return strNew.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
// return a new name in an objects friends array
  object.friends.push(name);
  return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// turn entire object into an array
newArr = Object.entries(object);
// test if array includes name and return results
flatArray = newArr.flat(2)
return flatArray.includes(name);
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // create list to store all names in a new array
    let pplArr = [];
    // create an array with the names of the friends
    let friendsArr = []
    //use a for loop to push all the names into pplArr
    for (let i = 0; i < array.length; i++){
     pplArr.push(array[i]['name']);
    }
    // create a loop that looks for friends of name
     for (let j = 0; j < array.length; j++){
        //create conditon where name property is at name index
        if(array[j]['name'] === name){
            friendsArr.push(array[j].friends);
        }
     }
    let flatFrnd = friendsArr.flat()
    // create a loop to get each friend and compare it to friends array
     for (let f = 0; f <= pplArr.length; f++){
        //create nested loop that compares firends to ppl
        for (e = 0; e <= flatFrnd.length + 1; e++){
            //create condition that deletes matches
            if(pplArr[f] == flatFrnd[e]  || name === pplArr[f]){
                delete pplArr[f];
            }
        }
     } 
     // let new array === friends array
    endArray = pplArr.filter(function () {
        return true
      });
      return endArray
    
    }


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 function updateObject(object, key, value) {
// // create key if it doesnt exist and and add value
  
object[key] = value;
return object
 }

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// create a loop for the array to seperate each string
for (let i = 0; i < array.length; i++){
    //create test and if true remove property that === string
    if (object.hasOwnProperty(array[i])){
        delete object[array[i]];
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //no idea why this doesnt work
//     array.sort();
//     for (let i = 0; i < array.length; i++) {
//       for (let j = 0; j < array.length; j++) {
//           // don't delete original
//           if (i !== j) {
//               // delete duplicatess
//               if (array[i] === array[j]) {
//                   array.splice([j], 1);
//                 }
//           }
         
//       }
//   }
//   return array
// try new way
// create new array to output non dupe array and object to use as test
let newArr = [];
let testObject = {};
//create loop to take an element from test array
for (i = 0; i < array.length; i++){
    // create test to see if array element alreay exists in object, if not add to object
    // and newArr
    if(array[i] in testObject === false){
        testObject[array[i]] = 'true';
        newArr.push(array[i]);
    }
}  
//return new array
console.log(testObject)
  return newArr;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}