// Array methods

// length property
let no=[10,20,60,45,786,92,78,56,40,82];
console.log(no.length);

// toString
let stringno=no.toString();
console.log(stringno);

// pop()
const fruit=["Banana","Orange","Apple","Mango"];
let fruit1=fruit.pop(); // pop() to remove last item in array
console.log(fruit);
console.log(fruit1);

// push()
let fruits=["Banana","Orange","Apple","Mango"];
let d=['jamun','grapes','carrot']
console.log(fruits.push('kiwi','pinaple',d));//insert elements in array
console.log(fruits);

// shift()
let fruits2=["mango","grapes","lemon","strawberry"];
let a=fruits2.shift();// shift() method remove first element in array
console.log(a);
console.log(fruits2);

// unshift()
let fruit3=["mango","apple","orange","Banana"];
console.log(fruit3.unshift('strawberry','grapes'));
console.log(fruit3);

//to delete item => pop,shift,delete - operator : deleted item creates undefined holes in original array 
//so length will remains same with delete oprator
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let indexOfApple = fruits4.indexOf('Apple');
console.log(indexOfApple);
 delete fruits4[indexOfApple];
console.log(fruits4);

// concat
let fruit5=["Banana","Orange","Lemon","Apple"];
let fruit6=['...Apple','...Orange'];
let fruit7=fruit5.concat(fruit6);
console.log(fruit7);

// join
let fruit8=[10,8,1997];
let date=fruit8.join('-').toString();//10-8-1997
console.log(date);

// slice
let n=[10,20,30,40,50,60,70,80,90];
console.log(n.slice(5));//in slice method it includes 5th index upto last element.

//splice()
let fruit0=  ["Banana", "Orange", "Apple", "Mango"];
fruit0.splice(1,1,'poo','pp') //first index is added & last index is removed item
//fruit0.splice(2,1)//remove
// fruit0.splice(1,2,'ll','ll');
//fruit0.splice(1,2) 
//fruit0.splice(1,2,'poonam) 
//first para >> how many ele wants to add , sec para >> 
//how many ele u want to remove, 3rd >>items to be added
console.log(fruit0);

//without using sort or reverse method convert array into decending order 

let test = ["Banana", "Orange", "Apple", "Mango"];
let revArray = test.sort().reverse();
console.log(revArray);