// String Methods
let str="Mynameis pooja";
let textlength=str.length;
console.log('Length of String is:',textlength);

// slice stringmethods
//slice(start[inclusive], end[exclusive])
let a=str.slice(4,8);
console.log('slice of a is: ',a);

//slice(start[exclusive], end[inclusive])
let b=str.slice(-10,-3);
console.log(' slice of b>>',b);

console.log(str.substring(6,-9));//Myname  -9=0 , so 6 will be end index(0,6)

//substr(start index, length)
console.log(str.substr(2,9));


//replace

let r = 'Pune method replaces  a specified pune value with another pune value in a stringmethod replaces a specified value with another value in a string';

let q = r.replace(/pune/,'mumbai');
console.log(q);

let j = r.replace(/pune/g,'mumbai');
console.log(j);

let i = r.replace(/pune/i,'mumbai');
console.log(i);

let k = r.replace(/pune/gi,'mumbai');
console.log(k);

let p = r.replaceAll('pune','mumbai');
console.log(p);

//concatinate string or +
let string1='pooja';
let string2='konda';
let strconacat=string1+" "+string2;
console.log(strconacat);

let l=string1.concat(' ','janardhan',' ',string2);
console.log(l);

//toLowerCase
let city='MY CITY IS SOLAPUR';
let city1=city.toLowerCase();
console.log(city1);

//toUpperCase
let s='i am from solapur city';
let s1=s.toUpperCase();
console.log(s1);

//trim()
let name3 = '          pooja';

let name4 = name3.trim();
console.log('name4 >>',name4);

//trimStart()
let name5 = name3.trimStart();
console.log('name5 >>',name5);

//trimEnd()
let name6 = name3.trimEnd();
console.log('name6 >>',name6);

//charAt()
let text5 = 'pooja konda';
console.log(text5.charAt(6));

//split() always return array

let dob = '10_08_1997';

let newDob = dob.split('_');
console.log(newDob);
console.log(newDob[0]);
console.log(newDob[1]);
console.log(newDob[2]);

let u = 'pooja J konda';
let u2 = u.split(" ");
console.log(u2);
console.log(u2[0]);
console.log(u2[2]);

// String Search Methods
// String indexOf()
let d ='monkey';
console.log(d.indexOf('e'));