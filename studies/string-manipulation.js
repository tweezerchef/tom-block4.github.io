/**
 * String Manipulation
 * There are two essential ways to manipulate strings
 * 1) using operators such as +,  +=, `` to create template literals
 * 2) using string methods such as .splice and .toUppercase
 * since strings are primitive values when altered they will create completely 
 * new references in memory when altered
 * Using operators:
 * + or +=
 */
let str1 = "Hi" + " " + "there!"
console.log(str1)//"Hi there!"
str1+= "and";
console.log(str1) //"Hi there!and"
//template literals
let b = "Ben";
let c = "Hi";
let str2 = `${c} there ${b}!`
console.log(str2) // "Hi there Ben!"
/**
 * String Methods
 * There are many built in methods in the string prototype that can be used
 * to manipulate and return new strings. A few of the most popular are .split()
 * .toUppercase() .concat() and .slice()
 *
 */
 let str3 = "Hello there";
 let strn = str3.toUpperCase();
 console.log(strn); // "HELLO THERE"
 console.log(str3)// "Hello There"
 let strSp = strn.slice(1)
 console.log(strSp) // "ELLO THERE"
 let strArr = strSp.split()
 console.log(strArr)// ['ELLO THERE']
 let fString = str3.concat(strSp)
console.log(fString);// 'Hello ThereELLO THERE" 
