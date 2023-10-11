const num=[1,2,3,4,5,6,7,8]

const newn=num.map((num)=>{return num+10})
//console.log(newn);

//CHAINING
const num1=[1,2,3,4,5,6,7,8,9,10]
const newval=num1
    .map((num)=> num*10 )
    .map((num)=>num+1)

console.log(newval);


//chaining with filtering

const num2=[1,2,3,4,5,6,7,8,9,10]
const newval1=num2

    .map((nums)=> nums*10 )
    .map((nums)=>nums+1)
    .filter((nums)=> nums>=40)

console.log(newval1);

