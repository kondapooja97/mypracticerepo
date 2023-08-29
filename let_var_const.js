//diff between let , var , const

//scope difference: 
//var:function level scope and let,const :block scope

let amount=500; //global declaration of variable can be used in any of the function.

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
        amount=400; //the global variable amount is updated to the value=400;
        console.log(amount);
    }
    // console.log(d);
    console.log(a);  //Uncaught ReferenceError: error
   // console.log(c);  // Uncaught ReferenceError: error

}
letvarconstdiff();

//hoisting :  define value to the variable first and then declare it
function test(){
  
    //  let name = 'poonam'; //D+D
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

    // Reassignment of function variable

    reAssignment(); //we can call the function() before or after the function defination.

 function reAssignment(){
    let name='pooja'; //Reassigning value to the variable is possible with let keyword
    name='kavita';
    name='prabhavati';
    console.log(name);

    var surName='bonal'; //Reassigning value to the variable is possible with var keyword
    surName='arkal';
    surName='konda';
    console.log(surName);

    const middleName='janardhan'; //Reassigning value to the variable is not possible with const keyword.
    // middleName='janu';
    // middleName='janya';
    console.log(middleName);
 }

    //Redeclaration of function variable with keywords

    function reDeclaration() {
        let name='sourya';  //Redeclaration of variable is not possible with let keyword.
        // let name='shubhangi';
        console.log(name);

        var color='pink';   //Redeclaration of variable is possible with var keyword.
        var color='yellow';
        var color='orange';
        console.log(color);

        const fruit='banana';  //Redeclaration of variable is not possible with const keyword.
        // const fruit='lemon';
        // const fruit='apple';
        console.log(fruit);

    }
    reDeclaration();

    function amtCalculation(){
        console.log(amount);
    }
    amtCalculation();