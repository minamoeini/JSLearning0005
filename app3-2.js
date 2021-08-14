const root = document.getElementById('myspan');


// const third = document.querySelectorAll("#myspan > .c3");
// third[0].style.color = "green";
//span.innerHTML = "<div>JIJIJ</div>";
//span.innerText = "<div>JIJIJ</div>";
//span.setAttribute("id","NEWID");
//span.style.color = 'red';
//span.style = "color:red";
//span.setAttribute("style","color:red");
//span.style.color = 'red';

const c1 = document.querySelectorAll('#myspan > .c1')[0];
const c2 = document.querySelectorAll('#myspan > .c2')[0];

const myol = document.createElement('ol',{
    id:'ol1'
});

const li1  = document.createElement('li');
li1.innerText = "List Item 1";

myol.appendChild(li1);

//root.replaceChild(myol,c1);
root.removeChild(c2);
root.insertBefore(myol,c1);
//document.write("dasdasd"); //like console log.


//different way of add event:
//1:
//c1.setAttribute("onclick","alert('y');");
//2:
// function handleClickC1(){
//     alert('AAA');
// }
//c1.onclick = handleClickC1;

//3: here we dont add event. we tell if click. this function call. then you dont see any thin in tag html
//this way is better and also yo can add more event there
//handleClickC1 is the refrence of functin. we dont call it.we just send refrence . if we pass handleClickC1(), we are calling it and result is undefiend
//and pass unddefiend to addEventListener
//c1.addEventListener('click',handleClickC1);
function handleClickC1(){
    
    alert('AAA');
}
function handleClickC1_2(){
    alert('AAA 2');
}

//c1.onclick = handleClickC1;

c1.addEventListener('click',handleClickC1);
c1.addEventListener('click',handleClickC1_2);

//c1.removeEventListener('click',handleClickC1);

const innerDiv = document.getElementById('innerDiv');
innerDiv.style.width = "100px";
innerDiv.style.height = "100px";
innerDiv.style.backgroundColor = "blue";

root.style.border = "2px solid yellow";

innerDiv.onclick = function(){
    console.log("Blue Clicked");
}

// root.onclick=function(){
//     console.log("Root Clicked");
// }

// root.addEventListener('click',function(){
//         console.log("Root Clicked");
//     },{
//         capture:true
//     });

root.addEventListener('click',function(event){
    event.stopPropagation();
    console.log("Root Clicked");
},{
    capture:true
});

const innerDiv2 = document.createElement('div');
innerDiv2.style.width = "80px";
innerDiv2.style.height = "80px";
innerDiv2.style.backgroundColor = "red";
innerDiv.appendChild(innerDiv2);

// innerDiv2.onclick = function(){
//     console.log("Red  Clicked");
// }

innerDiv2.addEventListener('click',function(){
    console.log("Red Clicked");
},{
    capture:true
});


console.log(myol);
