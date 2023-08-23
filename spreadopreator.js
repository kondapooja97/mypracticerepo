//JavaScript spread operator (...)
//The JavaScript spread operator (...) allows us to quickly copy all 
//or part of an existing array or object into another array or object.
let no = [10,20,30,60,30,55,44];
let no1 = [...no];
console.log(no1);

//part copy
let no2 = [10, 20, 30, 60, 30, 55, 44];
let [a, b, c, ...d] = no2;
console.log('a',a);
console.log('b',b);
console.log('c',c);
console.log('d',d);
 
//spread operator on obj: do not use on obj
let carDetails = { 
    carName : "Swift",
    color: "white",
    price: 800000,
    tpermite: true,
    dis:656565
}
let  carDetails3 = { 
    carName : "mini cup",
    color: "white",
    price: 90000,
    tpermite: false,
    discount:20000
}
let carDetail2 = {...carDetails};
console.log(carDetail2);

let car4 = {...carDetails, ...carDetails3};

console.log(car4);