//conditions: if, if-else, else-if,switch

// if(){
//   //code block 
// }

// if(){
//   //code block 
// }else{}
let a = 10;
let b = 20;
if (a < b) {
    console.log('a is small');
}

// if-else condition
if (a > b) {
    console.log('a is big');
}
else {
    console.log('a is small');
}

//ternory operator
a > b ? console.log('a is big') :  console.log('a is small');//10>20 false

//else-if -If want to check more than 2 conditions 
if (a == b) {
    console.log('a and b are equal!');
}
else if (a > b) {
    console.log('a is greater than b');
}
else if (a < b) {
    console.log('a is smaller than b');
}
else {
    console.log('otherwise else block');
}

// switch case condition
let color = 'green';
switch (color) {
    case 'black':
        console.log('black');
        break;
    case 'white':
        console.log('white');
        break;
    case 'green':
        console.log('green');
        break;
    case 'red':
        console.log('red');
        break;
    default:
        console.log('no match....!');
}

//nested if : if inside another if

let x=40;
let y=150;
if(x<100)//40<100 true
{
    if(x<y)//40<150 true
    {
        if(y<180)//150<180 true
        {
            console.log(y);
        }
           
    }
}

