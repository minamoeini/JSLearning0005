// const person = {
//     age: 12,
//     name:'reza'
// }

// const student ={
//     level:8
// }

// Object.setPrototypeOf(student,person);

// // const student = Object.create(person);
// // student.level = 18;__proto__

// //propotype
// //console.log(person.__proto__.hasOwnProperty('hasOwnProperty'));

// // console.log(student.__proto__.__proto__);
// const age = 21;

// const lastname = "hasanzade";
// const lastname2 = String("hasanzade");
// // String
// // Number
// // Boolean

// console.log('age' in student);


// const myarray = ["0",1,false,{name:'asdasd'},[4,56,0]]

// console.log(myarray[4][2]);

//Mutator => 
//Accessor => array
//Itrator => void


// const arr = [2,4,1,4,65,0];

// console.log(arr);

// arr.sort(function (a,b){
//     return b - a
// });

// arr.push(66);

// console.log(arr);

// const removedItem = arr.pop();

// console.log(removedItem);
// console.log(arr);


// arr.unshift(99);

// console.log(arr);

// const removedItem2 = arr.shift();

// console.log(removedItem2);
// console.log(arr);

// // const arr2 = ["ali","reza","morad","bahman","azar"];

// // console.log(arr2);

// // arr.sort(function (a,b){
// //     if (b - a > 0) return 1;
// //     if (a - b < 0) return -1;
// //     if (a - b == 0) return 0;
// // });

// console.log(arr);

// const arr2 = [2,4,1,4,65,0];

// arr2.splice(2,1);

// console.log(arr2);

// const array1 = [{name:'ali'},{name:'reza'},{name:'morad'}];
// const array2 = array1.slice();

// array1[0].name = 'kazem';

// console.log('-----');
// console.log(array1);
// console.log(array2);

///----

const arr2 = ["ali","reza","maryam","morad","bahman","azar"];
const arr3 = ["maryam"];

const result = arr2.concat(arr3);

// console.log(result.lastIndexOf("maryam"));
// console.log(result.indexOf("maryam"));
console.log(result);

const sliced = result.slice();
console.log(sliced);


const joinsample = result.join(' ~ ');
const str = joinsample.split(' ~ ')
console.log(joinsample);
console.log(str);


