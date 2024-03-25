//Logical operator 

// //1. And (&&) 

let pakistan_score = 120;
let india_score = 120;
console.log(pakistan_score == 120  &&  india_score == 120);

let num1 = 10;
let num2 = 5;
console.log(num1 == 10 && num2 == 5);

let football = 20;
let basketball = 30;
console.log(football== 20 && basketball== 30);

let number1 = 20;
let number2 = 30;
console.log(number1== 20 && number2 == 30);

let blackboard = 5;
let whiteboard = 3;
console.log(blackboard == 2 && whiteboard == 4);


let x = 2;
let y = 6;
console.log(x == 2 && y == 6);

let h = 6;
let g = 8;
console.log( h> g && g> h);

let c = 2;
let d = 4;
console.log( c< d && d> c);

let color1 = "red";
let color2 = "green";
console.log(color1 == "blue" && color2 == "yellow");

let color3 = "red";
let color4 = "green";
console.log(color3 == "red" && color4 == "green");


//Or || operator

let a = 10;
let b = 20;
console.log(a == 10 || b == 20);

let t = 50;
let z = 60;
console.log(t == 50 || z == 70);


let redApple = 500;
let greenApple = 600;
console.log(redApple == 400 || greenApple == 200);


 //Not ! operator

 let person = 4
 let tea = 4
 console.log(!(person == tea))

 let bluedress = 1
let blackdress = 9
console.log( !(bluedress == blackdress ))









//================conditional statements ==============

let personAge = 16;
if (personAge >18){
    console.log('you are eligible for vote');
}else{
  console.log("sorry you are not eligible for vote ")  
}


let hotToday = true;
if(hotToday){
    console.log("Wear lawn dress")
}else{
    console.log("Wear Cotton dress")
}

let myName = "Afzaal"
if(myName === "Hassan"){
console.log("my name is Afzaal")
}
else{
console.log("my name is Hassan")
}


//ELSE IF


let matchscore = 150
if(matchscore<50){
    console.log("score is not 150")
}else if(matchscore == 150){
    console.log("score is 150")
}else if(matchscore>100){
    console.log("score is more than 100")
}else{
    console.log("score is above")
}

