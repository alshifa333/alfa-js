
//+++++++++++++++FUNCTIONS+++++++++++++++
function Saymyname(){
	console.log("H");
	console.log("I");
	console.log("T");
	console.log("E");
	console.log("S");
	console.log("H");
}
//Saymyname()



function AddTwoNums(number1,number2){ //ye hain parameters
		console.log(number1+number2);
}

//AddTwoNums(3,4); ye hain arguments
//AddTwoNums(3,null);
//AddTwoNums(3,"a");
//AddTwoNums(3,"4");

//++++++++++++++++++++++++++++++++++++++++

function AddTwoNums(number1,number2){ //ye hain parameters
		let result=number1+number2;
		return result;		

}
const result=AddTwoNums(3,5)

//console.log("Result:",result);  //OP: undefined

//++++++++++++++++++++++++++++++++++++++++++++

function AddTwoNums(number1,number2){ //ye hain parameters
		return number1 +number2;
}
	
const result1 =AddTwoNums(3,5)
//console.log("Result2:",result);

//+++++++++++++++++++LOGIN USER MSG++++++++++++++++++++++

function loginUserMessage(username){
		return `${username} just logged in`
}

loginUserMessage("Alfa") //yahan sirf return hui hai 
console.log(loginUserMessage("Alfa")) //yahan ab humne print krwa dia

console.log(loginUserMessage()) //yahan ab humne print krwa dia lekin o/p me undefined just logged in aayega


//+++++++++++++PUTTING CONDITIONS++++++++++

function loginUserMessage(username){
	if(!username){ //WRITE THIS OR (username===undefined) both are same
			console.log("Enter a username first");
			return;
			}
		return `${username} just logged in`;
}

console.log(loginUserMessage())

//++WHAT IF WE DON'T PASS A NAME AND PUT A DEFALUT NAME++++++++++++++++++++++

function loginUserMessage(username="sam"){
	if(!username){ //WRITE THIS OR (username===undefined) both are same
			console.log("Enter a username first");
			return;
			}
		return `${username} just logged in`;
}

console.log(loginUserMessage())
 //if we put a default name than it will print the default name and when the value is not input by the user and if the value is input by the user it will do String Interpolation




//++(REST OPERATOR )IN FUNCTION++++++
console.log("+++++++++Multiple value PAssed in the Function+++++");

function calculateCartPrice(...num1){
			return num1;
}
console.log(calculateCartPrice(200,400,300,800))// it will sum up all the values here


//for only addin last values+++++++++++++++++++++++++++++++


function calculateCartPrice(val1,val2, ...num1){
			return num1;
}
console.log(calculateCartPrice(200,400,300,800)) //o/p:200,400,1100

//++++++++++++++++++++++
const user={
	username:"Alfa",
	price:1000000
}

function handledObject(anyObject){
	console.log(`User is ${anyObject.username.username} and price is ${anyObject.price}`);
}

handledObject({
	username:"alfa",
	price:329
})


//ARRAYS FOR FUNCTION

//const mynewArray={1,2,3,4,5,6};
function returnSecondValue(getArray){
	return getArray[1];
}
//console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([2,3,4,0,5,6])); 
