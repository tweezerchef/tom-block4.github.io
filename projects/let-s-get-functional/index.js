// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal in workspace directory:
 *
 *    npm start --prefix ./tom-block4.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

// filter
//map use to return a new array of every value of input transformed
// reduce iterates through an array to "acumulate a single value"


var maleCount = function(array) {
    let males = _.filter(array, function(element){return element.gender === 'male'});
    //console.log(males);
    return males.length;
};
//console.log(maleCount(customers));

// var femaleCount =  function(array) {
//     //implement reduce to get number of female customers
//     let females = _.reduce(array, (acc, current) => {
//         if (current.gender ==='female'){
//             acc++}
//         },0}
    
    //return number
// console.log(femaleCount(customers));
var femaleCount = function(array){
    // implement reduce to get number of female customers
    let females = _.reduce(array, function(acc, current){
    // acc represents what we're accumulating
    // how do we interact with the acc value and the current object to keep track of the
    // number of female customers
    // acc = 0 | current = {name: "Stephanie"}
    // if current customer is female, add 1 to acc
        if (current.gender === "female"){
            acc += 1;
        }
        return acc;
    }, 0);
    return females;
};
//console.log(femaleCount(customers));

var oldestCustomer = function(array){
    let oldestAge = _.reduce(array, function(acc, current){
        if(acc < current.age){
            acc = current.age;
        }
    return acc
       }, 0) 
   // let customerObj = _.filter(array, function(ellement){ellement.age === oldestAge});
    //return customerObj.name;
    for (let i = 0; i < array.length; i++){
        if (array[i].age === oldestAge){
            return array[i].name
        }
    }
} ;
//console.log(oldestCustomer(customers));

var youngestCustomer = function(array){
    let youngAge = _.reduce(array, function(acc, current){
        if(current.age < acc.age){
            acc = current;
        }
    //console.log('!!!!!', acc);
        return acc
       
    })
    return youngAge.name
} 

var averageBalance = function(array){
//   let newArr = array.replace(/[?,]/g, "")
    let numTotal = _.reduce(array, function(acc, curr){
        let currStr = curr.balance.replace(/[$,]+/g,"");
        let currNum = parseFloat(currStr);
        return acc+= currNum;
    }, 0)
    return numTotal / array.length;
}    
//console.log(averageBalance(customers));
//create function that takes in an array and a letter 
var firstLetterCount = function(arr, letter){
    // use .filter to push all element.name[0] === letter
    let letarr = _.filter(arr, function(element){
        console.log(element.name[0]);
       return element.name[0].toUpperCase() === letter.toUpperCase();
    })
    return letarr.length
};
//console.log(firstLetterCount(customers, "A"));

// find how many friends a given customer has that starts with a given letter
var friendFirstLetterCount = function(arr, cust, letter){
    // use .filter to push all element.name[0] === letter
    let letArrFr = _.filter(arr, function(element){
       if (element.name.toUpperCase() === cust.toUpperCase()){
            return element
        };
    })
    //create empty array to push matchint friends into
    let frArrTest = [];
    for (let i = 0; i < letArrFr[0].friends.length; i++){
        if(letArrFr[0].friends[i].name[0].toUpperCase() === letter.toUpperCase()){
            frArrTest.push(true);
        }
    }
    
    return frArrTest.length 
};
//create a function find the customers names that have a given customer as .friends
var friendsCount = function(arr, name){
    // create empty array to push peoples names into
    let frnWitArr = [];
    // filter through array and find if name is in array[i].friends array
    // using nested loop
    for (let i = 0; i < arr.length; i++){
        // loop through arr[i].friends to check if name == name and push the 
        //arr[i].name into frnWitArr
                for (let j = 0; j < arr[i].friends.length; j++){
                    //console.log(arr[i].friends[j].name)
                    if(arr[i].friends[j].name === name){
                        frnWitArr.push(arr[i].name)
                    }
                }
    }
    //return frnWitARR
    return frnWitArr;
};
friendsCount(customers, "Doyle Erickson");
// find the three most common tags in customers asociated tags and output an array
// of them
var topThreeTags = function(arr){
    // create an empty object to push all the tags names and amount into
    let tagObj = {};
    // loop through all the elements in the array
    for (let i = 0; i < arr.length; i++){
    // create nested array that loops through all the "tags" arrays
        for (let j = 0; j < arr[i].tags.length; j++){
            // push all the tags into the tag object. if tag exists already incriment value
             if (arr[i].tags[j] in tagObj){
                tagObj[arr[i].tags[j]] = tagObj[arr[i].tags[j]] + 1;
             }
             else{
                tagObj[arr[i].tags[j]] = 1;
             }
        }
}
//create array of the tagObj Object
let tagsArr = Object.entries(tagObj);
// sort array based on 'value' in the nested array
tagsArr.sort(function(a,b){return a[1] - b[1]});
// create an array with the last three values of the sorted tagsArr array
return [tagsArr[tagsArr.length - 1][0], tagsArr[tagsArr.length - 2][0],tagsArr[tagsArr.length - 3][0]]
//console.log(rtrnArr);
};
topThreeTags(customers);

// create a summary of genders returned in a object must use reduce
var genderCount = function(array){
    //create object with male:, female, and nonbinary: all with 0 as value
    let rtrnObj = {
    male: _.reduce(array, function(acc, current){
        if (current.gender === "male"){
                acc += 1;
            }
        return acc}, 0),
    female: _.reduce(array, function(acc, current){
            if (current.gender === "female"){
                    acc += 1;
                }
            return acc}, 0),
    'non-binary': _.reduce(array, function(acc, current){
        if (current.gender === "non-binary"){
                acc += 1;
            }
        return acc}, 0)
    
    }
    return rtrnObj;    
}
;    
    
//};
genderCount(customers);
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
