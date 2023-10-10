//+++++++++++++SWITCH+++++++

//BASIC SYNTAX
/*switch(key){
case value;
break;
default;
break;
}*/


let month=3;
switch(month) {
case 1:
console.log("JAN");
break;

case 2:
console.log("Feb");
break;

case 3:
console.log("Mar");
break;

case 4:
console.log("Apr");
break; 

case 5:
console.log("May");
break; 

 

default:
	console.log("You are n default");
	break;
}
//POINTS TO BE NOTED
//the break will help in breaking the further code so the further code will not print
//if the break statement is removed every statemnt will be printed except the default statement 



let month1="may";
switch(month1){
case "jan":
console.log("JAN");
break;

case "feb":
console.log("Feb");
break;

case "mar":
console.log("Mar");
break; 

case "apr":
console.log("Apr");
break; 

case "may":
console.log("May");
break; 

 

default:
	console.log("You are n default");
	break;
}