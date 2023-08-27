//diff between let , var , const

//scope difference: 
//var:function level scope and let,const :block scope
function letvarconstdiff()
{
    //code block
     var a = 10 ;
    // let b = 40;

    if (true) {
        let c = 50;   //can not access a variable with let keyword outside block
                      //let,const keyword has block level scope
        var d = 90;   //var keyword has function level scope
        const e = 80;
        //let res = a + 20;
        //  console.log(res);
        // console.log(b);
        console.log(c);  //50
        console.log(d);  //90
        console.log(e);  //80
    }
    // console.log(d);
    console.log(a);  //Uncaught ReferenceError: error
   // console.log(c);  // Uncaught ReferenceError: error

}
letvarconstdiff();
    S`1S  A`

//hoisting :  define value to the variable first and then declare it
function test(){
  
    // let name = 'poonam'; //D+D
    let name;  //declaration
    name ='poonam';   //defination
 
    surname = 'patil'; //def
 //    let surname; //declr   with let hoisting is not possible 
 //    console.log(name,surname); 
 
     city = 'mumbai';
     var city;
     console.log(city);   //hoisting is possible with var keyword
 
     city2 = 'pune';
    //  const city2; //with const keyword hoisting is not possible
    //  console.log(city2);
 }
 
 test();