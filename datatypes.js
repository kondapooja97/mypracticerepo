// JavaScript has 8 Datatypes
//primitive data type:
// String.
// Number.
// Bigint.
// Boolean.
// Undefined.
// Null.
// Symbol.
// Object.
//nonprimitive:
//An object

//string : 'poonam'/"poonam11"/'2020': used when value is alphabets/alphnumeric/number as a string

var name='pooja';
console.log(name);

let address='PT.NO.-110,vidi gharkul,hydrabad road,solapur';
console.log(address);

let amount=100000;
console.log(amount);
let amt=105.232;
amount=50000;
console.log(amount);

let a=30; //= assignment operator  ==?  ===?

// boolean data types : true/false
let passed=true;
console.log(passed);

let xyz='true';
console.log(xyz);

// typeof operator : defines the type of data

console.log(typeof(amount));
console.log(typeof(passed));
console.log(typeof(xyz));

// undefined
let jk;
console.log(jk);
console.log(typeof(jk));

//null data: data type of null : object
let cash=null;
console.log(cash);
console.log(typeof(cash));

//object:
//empty obj
//let studentData = {};
let studentData={
    studentName:'pooja',
    age:26,
    contact:1234567895,
    city: 'solapur'
}
console.log(studentData);
console.log(typeof(studentData));

//empty array
//let list = [];
let list=['i10','volvo','swift','audi'];
console.log(list);
console.log(typeof(list));

let h = 10.0;
let l = h.toString();
console.log('boolean value',l);
console.log('boolean value',typeof(l));

let savingAmount = BigInt('9999999999999999');
let amount2= 9999999999999999n;
console.log(amount2);
console.log(savingAmount);

let r='99999999999999999';
console.log(r);