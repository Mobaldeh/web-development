function run(){
    alert("print message")
}

function changecolor(){
    x=document.getElementById("changeToRed");
    x.style.color="red";
}
function colorBackground(){
    y=document.getElementsByClassName("pinkBackground");
    y.style.backgroundColor= "red";
}
    
function makeBlue(){
    x=document.getElementById("header1");
    x.style.color= "blue";
}
function makeOrange(){
    x=document.getElementById("header1");
    x.style.color= "orange";
}

function changeinnerhtml(id_name,message){
    
    document.getElementById(id_name).innerHTML= message;
    if  (document.getElementById(id_name).innerHTML==message){
        document.getElementById(id_name).innerHTML==id_name;

    }
    else{
        document.getElementById(id_name).innerHTML== message;
    } 
    }

