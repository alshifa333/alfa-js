//+++++push operator+++++++
const makeup=["victoria", "MM","lakme"]
const clothing=["hm","zara","LV"]

makeup.push(clothing);
console.log(makeup);//(4) ['victoria', 'MM', 'lakme', Array(3)]  the 2nd array become an individual  element
console.log(makeup[3][1])//we can get the 1 element of the 3rd elemnt which is an array

//++++++++++++SPREAD OPERATOR++++++++++++ breaking the glass

const allstuff = [...makeup,...clothing];

console.log(allstuff);// results are not array elements

//++++++concatination+++++ gives us the new array whereas push depends on existing array

const allstuff1 = makeup.concat(clothing);

console.log(allstuff);

//+++++++++++ARRAYFROM++++++++++

console.log(Array.from("ALFA")); //o/p will be in array ["A", "L","F","A"]
console.log(Array.from(name= "ALFA")); // output will be[] as it will get confused to make the array of keys or array of symbol INTRESTING QUES FOR INTERVIEW

let a=10;
let b=20;
let c=30;
console.log(Array.of(a,b,c));
