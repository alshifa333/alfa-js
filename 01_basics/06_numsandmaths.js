//++++++++++NUMERS & MATHS++++++++
const score=400;
console.log(score);

const balance=new Number(100);  //new obj is created using the new keyword which is of number type.

console.log(balance); //O/P=[Number:100]

console.log(balance.toString().length); // after converting the number to string we can even use the methods of String O/P=3

console.log(balance.toFixed(2)); //mostly used when we'll make ecommerce website and the O/P = 100.00


const othernum=23.8966;

console.log(othernum.toPrecision(3)); /* retn a string containing number represented either in exponential or fixed point notation with specified number of digits.   o/p = 23.9  */ 

const othernum1=123.8966;
console.log(othernum1.toPrecision(3)); //124

const othernum2=1123.8966;
console.log(othernum2.toPrecision(3)); //1.2e+3

const hundAmc=10000000;
console.log(hundAmc.toLocaleString()); //1,000,000  according to american standards

const hundInd=10000000;
console.log(hundInd.toLocaleString('en-IN')); //10,00,000

//##############MATH
console.log(Math)	 //object maths
console.log(Math.abs(-4)); //can change the -ve value into +ve only!
console.log(Math.round(4.6));// o/p 5
console.log(Math.ceil(4.2)); // o/p 5
console.log(Math.floor(4.9));// o/p=>4


console.log(Math.min(2,3,4,9));
console.log(Math.max(3,52,55,3));

console.log(Math.random()); //the values lies b/w 0 to 1 only
 
console.log(Math.random()*10)//to avoid full 0 values 
 console.log(Math.random()*10+1); //to get the values greater than 0 and when we want the smallest value we just do math.floor

const min=10;
const max=20;
 //let us consider we want values b/w min and max
Math.random() * (max-min+1) + min; 


//TYPE OF MATH IS OBJECT

//+++++++DATE++++++


//TYPE OF MATH IS OBJECT
let myDate=new Date(); // are creating the obj here i.e obj of date
console.log(myDate.toString());

console.log("Declaring the date");
let createdate=new Date(2023,0,12); //months starts with 0
console.log(createdate.toString());


//when we want to write the date in dd-mm-yyyy
let createdate1=new Date("2023-01-12"); //here the month starts from 01
console.log(createdate1.toLocaleString());


let mytimestamp=Date.now(); //use in polls or quizzes
console.log(mytimestamp); //we'll get the miliseconds from 1jan1970 till now 1695724771440


//+++++++++++++++++++++++++++++
console.log("++++++++Converting milisec into sec+++++");

console.log(Math.floor(Date.now()/1000));//when we do not want to decimal values we use floor


//++++++current date


let newD=new Date();
console.log(newD.getMonth());//start from0  oct=8
console.log(newD.getDay());//starts from 0 tue=2



//about TOLOCALESTRING METHOD to use multiple properties at once
let newDate=new Date();
newDate.toLocaleString('default',{
						weekday:"long"})