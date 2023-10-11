const num=[1,2,3,4,5,6,7,8,9,20]
const Newnum=num.filter((num)=>num>4)
//console.log(Newnum);

const num1=[1,2,3,4,5,6,7,8,9,20]
const Newnum1=num.filter((num1)=>
{ 
   return num1>4 //compulsory to write rtrn
})
//console.log(Newnum1);

const num4=[]
num1.forEach((num1)=>
{
    if(num1>4){
        num4.push(num1)
    }
})
console.log(num4);