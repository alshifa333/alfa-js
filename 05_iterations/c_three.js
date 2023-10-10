//for of loop

const arr=[1,2,3,4,5];

for(const num of arr){
    console.log(num);
}

const greeting="hello";
 for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
    
 }

//VALUE SETTING IN MAPS
//The Map object holds key-value pairs and remembers the original insertion order of the keys.

//MAps store unique values

const map= new Map()
map.set('A','Apple')
map.set('B','Ball')
map.set('C','Cat')
map.set('C','Cat')

console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value); //to print the values in key value pair
}



//WE CAN NOT ITERATE THE OBJS WITH THIS METHOD
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
