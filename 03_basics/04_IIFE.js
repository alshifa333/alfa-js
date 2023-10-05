//+++++++++++++LECTURE 24++++++++++++++++++++++

//IIFE(Immediately Invoked Function Expression) jis function ko jaise hi likha usko immediate execute krwana hai 
//Global  scope ke pollution se problem hoti hai kai baar... to remove that pollution we use IIFE

(function chai(){
	console.log(`DB CONNECTED`);
})(); //it is compulasory to put semi colans here bcz iife dont know where to stop so we have to end this line using semi-colon


//( ) ( ) //1ST PLACE WHERE WE ARE GOING TO WRITE THE DEFINITION OF FUNCTION AND SECOND IS EXECUTION CALL


//IIFE AS A ARROW FUNCTION
//** NAMED IIFE


/*
( function chaishai() => {
	console.log(`DB CONNECTED AGAIN`);

})();
*/




//IIFE for variable

//**UNNAMED IIFE
( () =>{
	console.log(`DB CONNECTED AGAIN `);

})()


//2 IIFE EK SAATH UPPER DEKHO NAMED AND UNAMED KO



( (name) =>{
	console.log(`DB CONNECTED AGAIN and ${name}`); //when we expect a variable (name) and expect it on upper side 

})  ( `hitesh`) //yahan pass kr dia
