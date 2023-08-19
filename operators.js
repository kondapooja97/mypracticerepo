//Arithmetic Operators +,-,*,%,/,++,--

let num = 20 * 30;
console.log('number varible value',num);

let a = 20;
//a = a+1
console.log('value of ++a',++a); //preIncrement : it will add first and then return it 
console.log('value of a',a);

let b = 20;
console.log('b++',b++); //postIncrement : it will return value first and then get increament by one
console.log('b',b);
console.log('b'+ b);

let x = 10;
x = x + 1;
x++

let y = 10
//y = y - 1;
//y--;
console.log('y',y--);
console.log(y);

//assigment operator = , +=,-=,*=,%=

let r = 20; //assigmnet operT
let v = 60;   //+= addition assigment operator
//v = v + r;
v += r;
console.log('v-->', v);

let p = 90;
let q =10;
p -= q //90-10,p=80
console.log('p-->',p);

//diff betw =, == , ===
//Comparison Operators
// ==  : equality operator >> value
let k = 40;
let j = 40;
console.log( k == j );

//=== : equality operator >> value + data type 
let u = 10;
let w = '10';

console.log( u == w); //only checks value, so true
console.log( u === w);// v+ dt , so false

// > greater than

console.log('>',k > j);
console.log('<',k < j);

console.log( '!=', u != w);  //->>value not equal =true , values are equal >>false
console.log( '!==', u !== w); //value as well as dt

 console.log( '>=', j >= k);
 console.log( '<=', j <= k);

//?: ternory operator::: condition ? true : false;
let d = 300;
d > 200 ? console.log('d is greater')   : console.log('d is smaller'); 

let text1 = "A";//65
let text2 = 65;//66
let result = text1 == text2;
console.log(result);

//Logical Operators &&, ||,! 

let r1 = 90;
let r2 = 50; 

console.log('print value of && : ', r1 > r2 && r2 < r1);   // 90>50 && 50<90 ->>> T && T ->>T

console.log('print value of || : ', r1> r2 || r2 < r1); //90 > 50 || 50<90 ->>T || T = T/T || F->>T
let z = true;
console.log('!-->', !z);