const accountId= 199;
//const can never be changed
let accountEmail="alshifathearmy78@gmail.com";
var accountPass="121";
accountCity="Bareilly"; //prefer not to use this wihtout using let var 
let accountState; // if we do not input any value in the variable then it will return undefined

console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountCity]);
/*
prefer not to use the var 
because of issue in block scope and functional scope
*/
