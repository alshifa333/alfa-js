//+++++++++++++++++++++++++ ARRAY +++++++++++++++++++++++++++++

const arr=[1,2,3,4,5,6];

console.log(arr[0]); //op = 1

console.log("+++++ARRAYMEHTODS+++++");
//ARRAYMETHODS

arr.push(8); 
console.log(arr); //adds the element at the end of the array  op[1,2,3,4,5,6,8]

arr.pop(); //removes the element at the end of the array
console.log(arr); //op[1,2,3,4,5.6]

arr.unshift(9);//adds the element in front
console.log(arr);
arr.shift()// removes the element from front
console.log(arr);

console.log(arr.includes(9));

console.log(arr.indexOf(2));

const newArr=arr.join()
console.log(arr);
console.log(newArr);
console.log(arr);
console.log(typeof newArr);//String



//SLICE AND SPLICE


console.log("A", arr); // [1,2,3,4,5,6]

const mynew= arr.slice(1,3);

console.log( mynew); //OUTPUT [1,2]

console.log("B", arr); //OUTPUT[1,2,3,4,5,6]


//++++++++++++++++++SPLICE+++++++++++++++++++++


const mynew2= arr.splice(1,3); 

console.log( mynew2);   //OUTPUT [1,2]

 console.log("C", arr); //OUTPUT[3,4,5,6]

//SPLICE will manipulate th original array
