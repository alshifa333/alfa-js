
/*How the data is stored and how we can access the data?
 based on this the data is stored
that is PRIMITIVE and NON-PRIMITIVE(Refrence type)
*/


//PRIMITIVE(7 types)
//String 
const a="alfa";

//Number
const b= 222;

//Boolean
const c=true;

//null
const outsidetemp=null; 

/*bahar ka temperature abhi humne dia nhi hai
and when we check the typeof of null we'll get object*/


//undefined
let useremail;

//Symbol
const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id=== anotherId);


//BigInt
const bignum=247365746597346937n;
/*and when we check the typeof of BigInt we'll get undefined
to make a value unique we use symbol
BigInt badi badi scientific values ke liye
*/




/*refrence(non primitive)  They'll return the object for typeof
array objects functions
*/

//ARRAY
const color=["red","blue","green"];


//OBJECT
let Obj={
		name:"alfa",
		age:21,
}


//FUNCTION can be treated as variable
const myfunct=function(){
console.log("hello");
}






/*Is JS is and Dynamically or statically typed?
we don't need to declare the datatype of the variables
const Score=100; here we don't compulsary need to declare the datatype
JavaScript is a dynamically typed language, which means that data types of variables 
are determined by the value they hold at runtime and can change throughout the 
program as we assign different values to them.
*/

/*

 Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)

*/
