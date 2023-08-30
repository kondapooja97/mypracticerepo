// ForEach
let cars = ['i10', 'i20', 'swift', 'jaguar', 'audi'];
let newCars = [];

for (let i = 0; i < cars.length; i++) {
    newCars.push(cars[i])

}
console.log('newCars : ', newCars);

let newCars1=[];
cars.forEach(element => {
    newCars1.push(element)
});
console.log('newCars1 : ',newCars1);

//spread operator (... )The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
let newCar2 = [...cars];
console.log('newCar2',newCar2);

// map
let employee2=[{name: 'pooja', age : 26},
{name: 'sneha', age : 18},
{name: 'rukshita', age : 15},
{name: 'pallavi', age : 25},
{name: 'aryana', age : 1},]

// let employeeNames=employee.map(employeeData=>{
//     return employeeData.name;
// })
// console.log('employeeNames : ',employeeNames);

let employeeNames=[]
employee2.map(employeeData=>{
    employeeNames.push(employeeData.name)
})
console.log(employeeNames);

//JSON
let stringifyedData = JSON.stringify(employee2)
console.log("stringifyedData",stringifyedData)
let parsedData = JSON.parse(stringifyedData)
console.log('prsedData',parsedData.ename);


//shallow copy :
let a1 = ['a','ab','hh'];
let b1 = a1;
console.log('b1',b1);
b1[2] = 'pooja';//['a,'pooja,'hh]
 
 console.log('b1',b1);
 console.log('a1',a1);

 //deep copy 
 const originalArray = [{name: 'John'}, {name: 'Jane'}, {name: 'Mike'}];
 const deepCopy = JSON.parse(JSON.stringify(originalArray));
 
 originalArray[0].name = 'Modified';
 
 console.log(originalArray); // Output: [{name: 'Modified'}, {name: 'Jane'}, {name: 'Mike'}]
 const deepCopy1 = JSON.parse(JSON.stringify(originalArray));
 console.log(deepCopy1);

 let employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000
}

console.log("Employee=> ", employee);
let newEmployee = employee;    // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as
// newEmployee is changed.


let employee1 = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000
}

console.log("=========Deep Copy========");
let newEmployee1 = JSON.parse(JSON.stringify(employee1));
console.log("Employee=> ", employee1);
console.log("New Employee=> ", newEmployee1);
console.log("---------After modification---------");
newEmployee1.ename = "Beck";
newEmployee1.salary = 70000;
console.log("Employee=> ", employee1);
console.log("New Employee=> ", newEmployee1);

// filter array ittration method
let no=[10,50,100,22,20,4,40,60];
var itemgreater=no.filter(item=>{
  return item > 20
})
console.log(itemgreater);