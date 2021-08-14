//Destructuring

//*array
//*object

// const person ={
//     name:"ali",
//     age:12,
//     lastname:"rezaei"
// }

// const name = person.name;
// const lastname = person.lastname;

// const { name : firstName,lastname } = person;
// person.name = "jafar";
// console.log(firstName,lastname);

// const arr = ["Apple","Orange","dasdas","aasda"];

// // const frute1 = arr[0];
// // const frute2 = arr[1];
// const [frute1,,frute2] = arr;

// console.log(frute1,frute2);

// function sample(){
//     const x = function(){

//     }

//     const y = function(){

//     }

//     return [x,y]
// }
// //const myarr = sample();
// // const first =myarr[0];
// const [first,second] = sample();

//spread operator

// const student={
//     avg:20,
//     lastname:'hasani'
// }

// const person={
//     height:180
// }

// const student2={
//     // avg:student.avg,
//     // lastname:student.lastname,
//     fathername : 'reza',
//     avg:33,
//     ...student,
//     ...person
// }

// console.log(student2);

// function sum(...numbers){
//     let s =0;
//     numbers.forEach(i=>{
//         s+=i;
//     });
//     return s;
// }


// console.log(sum(3,4,5,6));


// const arr1 = [32,4,5,6];
// const arr2 = [32,23,43];

//  const arr3 = [...arr2,...arr1,424];

//  console.log(arr3);

//Arrow Function

// const ss = function (firstname,lastname){
//     return firstname + " " + lastname;
// }

// const ss = (firstname,lastname) => {
//     return firstname + " " + lastname;
// }

// const ss = (firstname,lastname) => firstname + " " + lastname;

// const square = input => input * input;

// const noinput = () => "no input";

// console.log(noinput());

// const arr1 = [32,4,5,6];

// arr1.map(item=> "This is :" + item);

// console.log(arr1.map(item=> "This is :" + item));


// const a = a=>b=>c=>d=>a*b+c*d;

// console.log(a(3)(4)(3)(2));
class Person{

    constructor(name){
        this.name = name;
    }

    sayHello1(){
        console.log('sayHello1 called');
    }

}

class Student extends Person {

    constructor(name,age){
        super(name);
        this.age = age;
    }


    sayHello2=()=>{
        this.sayHello1();
    }

    
}

const std1 = new Student("ALI",23);
std1.sayHello2();

console.log(std1);