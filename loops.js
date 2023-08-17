//for loop
//array
let cars1 = ['i20','i10','swift','jaguar','Audi',200,true,test()];// Hetrogenous array >>>valid array

// console.log(cars);
function test(){
    return 20;
}
console.log(cars1);

//homogenous array
let cars = ['i20', 'i10', 'swift', 'jaguar', 'Audi'];

//length operator: string and array -->> will give length of aaray
let value = cars[2];
 console.log('value',value);    
 console.log(cars.length);
 console.log(cars[0]);
 console.log(cars[1]);
 console.log(cars[2]);
 console.log(cars[3]);
 console.log(cars[4]);
 console.log(cars[7]);//undefined

//loops: for loop , for in,for of, forEach(array ittration)
// for(statment;condition;++/--)
// i++ => i = i + 1


// for(;i < cars.length ; i++){  //error i is undefined

// }
// for(; ; i++){  //error i is undefined

// }
// for(;; ){  //infinite loop

// }

// // for(let i = 0 ; i < cars.length ; ) { //infinite loop

// // }

for (let index = 0; index < cars.length; index++) {
    console.log(cars[index]);
}

//for in : do not use for array
for (let i in cars) {
    console.log(cars[i]);
 }
// //note: Do not use for in over an Array if the index order is important.
// //The index order is implementation-dependent, and array values may not be accessed in the order you expect.
// //It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.


//for in loop on objects

let student = {
    name: 'pooja',
    age: 26,
    mob: 6598989898
}
//obj : for in 
for (let x in student) {
    console.log(student[x]); //[]>>property access
}

//array : for,for of , forEach(array ittration method)
let numbers = [10, 20, 66, 55, 88, 889];

for (let num of numbers) {
    console.log(num);
}

//do while loop
let h = 10;

do {
    h++;
    console.log(h);
}
while (h < 15)