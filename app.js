// //firstname = "ali";

// const firstname = "hasan" + " aasd as";
// firstname = "ali";
// console.log(firstname);

// const x = "ff";
// const y = 10;

// const xy = x * y;

// console.log(xy);


// Number
// String
// Boolean
// null
// undefined
// const x = 2;
// if (x === 2){
//     console.log('true');
// }else{
//     console.log('false');
// }


// switch(x){
//     case "2":console.log('do');
//     break;
//     default:console.log('none');
// }

// // for (let i=0;i<10;i++){
// //     console.log(i);
// // }
// let i = 12
// // while(i<20){
// //     console.log(i);

// //     i++;
// // }

// do {
    

//     if (i === 13) continue;
//     console.log(i);
//     i++;
// }while(i<20)

// Hoisting;

// Math.random()

//let age = 2;

// if (Infinity < 18){
//     var firstname = "hasan";
//     console.log(`${firstname} age is under 18: ${age}`);
// }

//age =+ "XX";

// const isValid = true;

// const firstname = "";
// const lastname = "edalat";

// const نام = (firstname && '-') + " " + lastname
// console.log(نام);



// function logname (firstname,age=4){
//     function sayHello(){
//         console.log('hello');
//     }

//  console.log(`${firstname} is ${age} years old`);
//  return 33;
// }


//  sayHello();


// const student={
//     lastname:'rezaei',
//     average:19
// }

// const student2 = student;

// const x = new Object();
// x.name = 'asdas';

// student2.average = 20;

// console.log(x);


//console.log(function1())


// function Student(lastname,age){
//     this.lastname = lastname;
//     this.age = age;
// }


// function createStudent(lastname,age){
//     return {
//         "last name":lastname,
//         age
//     }
// }
// const student1 = createStudent('ahmadi',12);


// student1["last name"] = "asdasd";

// console.log(student1["last name"]);
//console.log(new Student('ahmadi',22));

const person1={
    lastname:'hoseini',
    sayHi:function(){
        console.log(`Hello ${this.lastname}`)
    }
}

const person2={
    lastname:'rezaei',
    sayHi:function(){
        console.log(`Hello ${this.lastname}`)
    }
}

//call
//apply

//bind

person1.sayHi();
person1.sayHi = person1.sayHi.bind(person2);

person1.sayHi();


const person44={
    name:'ali'
}

const person55={
    name:'ali'
}

const person66 = person55;

console.log(person66 === person55);