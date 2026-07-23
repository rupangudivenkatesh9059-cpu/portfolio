const text=[
"Web Developer",
"Python Programmer",
"Java Developer",
"Frontend Developer",
"Problem Solver"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=text[i];

if(!isDeleting){

document.getElementById("typing").textContent=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1200);

return;

}

}else{

document.getElementById("typing").textContent=current.substring(0,j--);

if(j<0){

isDeleting=false;

i=(i+1)%text.length;

}

}

setTimeout(type,isDeleting?60:120);

}

type();

ScrollReveal().reveal('.hero',{
distance:'80px',
duration:1500,
origin:'bottom'
});

ScrollReveal().reveal('.skill',{
interval:200
});

ScrollReveal().reveal('.card',{
interval:200,
origin:'bottom'
});