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
let employee=[{name: 'pooja', age : 26},
{name: 'sneha', age : 18},
{name: 'rukshita', age : 15},
{name: 'pallavi', age : 25},
{name: 'aryana', age : 1},]

// let employeeNames=employee.map(employeeData=>{
//     return employeeData.name;
// })
// console.log('employeeNames : ',employeeNames);

let employeeNames=[]
employee.map(employeeData=>{
    employeeNames.push(employeeData.name)
})
console.log(employeeNames);