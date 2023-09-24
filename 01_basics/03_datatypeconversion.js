
let score= "44";

console.log(score);
console.log(typeof score);
let num=Number(score); //here we are trying to convert the value of score(which is a string) in number by using Number(score);
console.log(typeof num);
 
console.log("*********************");

let a="33aa";
let numb=Number(a);
console.log(typeof numb);
console.log(numb);  // O/p will be NaN(not a number)


console.log("********** for boolean values ************");
let b="null"; 
let booleanb=Boolean(b);
console.log(b);
console.log(typeof booleanb);
//null=> null, name=>true, b=1=>true


//+++++++++++ Operators in Js++++++++++++
let value=5;
let negval=-value;
console.log(negval);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(4%2);
console.log(2**2); //for adding the power we use **


//to add 2 string
let str1="alfa";
let str2=" drop_dead";
let str3= str2+str1;
console.log(str3);//str3=drop_dead alfa


console.log("1"+2);
console.log(2+"1"); //in both the cases o/p will be 12

console.log("1"+2+2);// o/p will be 122 as we write the value of stirng b4 the numberics it will givw string as an o/p
console.log(2+2+"1"); // op will be 41 putting atring after the num will not affect the value of number


console.log(+true);// will rtn 1
//console.log(true+); will throw an exception

console.log("++++++++++++++++++++++++")

//precedence 
let game=200;
let extrascore=2;
game++;
console.log(game);
console.log(extrascore+game);
console.log(game);



