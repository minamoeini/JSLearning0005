//Exceution Context
//Global
//function


// const asdasd ={

// }

// function Asdas(){
//     console.log(this);
// }

// const x = new Asdas();


console.log('1');
console.log('2');
const timeoputId = setTimeout(() => {
    console.log('after 5 sec');
}, 5000);
console.log('3');

setTimeout(() => {
    console.log('after 2 sec');
    clearTimeout(timeoputId);
}, 2000);


const int = setInterval(() => {
    console.log('interval');
}, 2000);

setTimeout(() => {
    console.log('clearInterval');
    clearInterval(int);
}, 10000);