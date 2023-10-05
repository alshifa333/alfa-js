//++++++++++++++LECTURE 23+++++++++++++++

//ARROW FUNCTIONS

const user={
	username:"alfa",
	price:200,
	
	welcomeMsg: function(){
	//console.log(`${username}, Welcome to website`);
    console.log(this);
	}
}
user.welcomeMsg()
user.username="sam";
user.welcomeMsg()




//+++++++++++++++++++++++++++++++++++++++++


const user1 ={
	username:"alfa",
	price:200,
	
	welcomeMsg: function(){
	console.log(`${username}, Welcome to website`);
	}
}

//user.welcomeMsg()
//user.username="sam";
//user.welcomeMsg()

//when we peint this outside the function enviroment
console.log(this);

//Browser ke ander global obj is Window and Node ke andar { } empty array aata hai 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//when we print this inside the function enviroment hume milti hai global value microstructure fetch kya hai sb milta hai
function chai(){
	console.log(this);
}

chai();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function chai1(){
	let username="Alfa"; //again sb kuch milega
	console.log(this);
}

chai1();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function chai2(){
	let username="Alfa"; 
	console.log(this.username); //undefined
}

chai2();


//+++++++++++++++++++++++++++++++++++++++++++


const chai3=function(){
	let username="alfa"
	console.log(this.username); //undefined
}

chai3();





const chai4= () => {
	let username="alfa"
	console.log(this.username);  //undefined
}
chai4();




const chai5=function(){
	let username="alfa"
	console.log(this.username); //undefined
}
chai5()


//ARROW FUNCTIONS


//++++++++++++++EXPLICIT RETURN++++++++++++++++++++++++++++++++
const addTwo= (num3, num4) => {
	return num3 + num4;
};

console.log(addTwo(3,4));

//++++++++++++++++++++++IMPLICIT RETURN FUNCTION+++++++++++++++++++++++
const addToo=(num1,num2)=>(num1 +num2)
console.log(addToo(2,3));
//jb hum curly bracket use karentge toh return karenge agar curly bracket use nahi karenge toh toh return ki bhi zaroorat nhai hai


const add= (num1, num2) => ({username:"alfa"})

console.log(add(3,3)); // OP: alfa   (as the value must be written in the curly braces for returning AN OJECT)


//diff between Arrow function and Function