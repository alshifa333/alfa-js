const skills=["js","java","python"];

//skills.forEach(function(val){
//    console.log(val);
 //})




//ARRAY FUNCTION
/*skills.forEach(iteam=> {
    console.log(iteam);
});*/

/*function printme(item){
    console.log(item);
}

skills.forEach(printme)*/

skills.forEach((item,index,arr) => {
    console.log(item,index,arr);
});

//TO ACCESS THE OBJECTS USING FOREACH LOOP
//use in database
const colourname=[
{
    colour: "grey",
    object:"Laptop"
},
{
    colour:"pink",
    object:"hairband"
},
{
    colour:"black",
    object:"heels"
}
]
colourname.forEach((item)=>{
   console.log(item.colour);
})
