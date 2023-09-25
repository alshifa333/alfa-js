//ACTUAL WAY OF STRING INTERPOLATION backticks are use for String interpolation
//we make placeholders and directly inject the varibles in place of placeholders 
let name="alfa";
let score=22;
console.log(`hello my name is ${name} and my score count is: ${score}`);

console.log("++++++++++++++++++++++++++++")
/*to declare a String in the String given below we get the value as h=0,i=1....and so on 
according to the we think that they are array but they are String only as an object
*/
const gameName=new String('hitesh bhai')


//to access key value pair
console.log(gameName[0]);


console.log("++++++++++++++++++++++++++++")
//TO ACCESS THE PROTOTYPE
console.log(gameName.__proto__);


//TO ACCESS DIFF METHOD OF PROTOTYPE
console.log(gameName.length);
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2)); //to check at which index which character is present

/*++++ WE CAN CHECK ALL THE METHODS NOT ONLY FROM THE mdn Documents BUT ALSO FROM THE CONSOLE SCREEN TO
BY GIVING AN INPUT
const gameName=new String('hitesh')
undefined
gameName
String {'hitesh'}
0: "h"
1: "i"
2: "t"
3: "e"
4: "s"
5: "h"
length: 6
[[Prototype]]: String
anchor: ƒ anchor() AND MANY MOREEEEE ETC ETC
*/


console.log("+++++++++++++++++++++++++++++++++++++++++++++");
//STRING SLICING
const newString=gameName.substring(0,4);
console.log(newString);

const newString2=gameName.slice(-6,3);//here we can give -ve value and get the backword o/p
console.log(newString2);

console.log("++++++++++++++++++++++++++++") //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

const url="https://alfa.com/alfa05drop";
console.log(url.replace('drop','dead'))
console.log(gameName.split('/'));


