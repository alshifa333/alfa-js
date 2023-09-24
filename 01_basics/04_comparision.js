/*console.log(2>=1);
console.log(4>3);
console.log(5<2);
console.log(3==3)
console.log(2!=1)
*/


//+++++++++++++++++++++++++++
console.log("2"==1); //when we compare b/w 2diff datatype it will convert inot the num on its own
console.log("02"==1); // both of this might give unpredictible result

//NOTE=must have same datatype for comparision b/w 2 numbers!!!
//must never us e this below 6 lines for comparision
console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined ==0);
console.log(undefined>0)
console.log(undefined <0)
//the reason is that an equality check == and comparisions > < >= <= work diffrently
//comparision convert null to a number,treating it as 0
//that's why (3 null>=0) is true and null>0 is false 


//Strict check === this not only check the values but also their datatypes

console.log("3"===3);