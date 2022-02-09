const canvas = document.querySelector("#canvas");

canvas.style.border="1px black solid";

console.log(canvas);

const context = canvas.getContext("2d");

console.log(context);


const startx=10;
const starty=250;

let trunkw=55;
let trunkh=45;

let bodyw=100;
let bodyh=40;

let hoodw=80;
let hoodh=45;

context.fillRect(startx,starty,trunkw,trunkh);
context.fillRect(startx+trunkw,starty+5,bodyw,bodyh);
context.fillRect(startx+trunkw+bodyw,starty,hoodw,hoodh);



context.beginPath();

context.moveTo(startx+trunkw,starty+5);


let windowH = 30;

context.quadraticCurveTo(startx+trunkw,starty-windowH,startx+trunkw+10,starty-windowH);
context.quadraticCurveTo(startx+bodyw+20,starty-windowH,startx+bodyw+20,starty-windowH);
context.quadraticCurveTo(startx+bodyw+20+10,starty-windowH,startx+bodyw+20+35,starty);

context.stroke();


context.moveTo(startx+trunkw+20,starty+trunkh+20);

context.arc(startx+trunkw,starty+trunkh+20,20,0,360);

context.moveTo(startx+trunkw+bodyw+40,starty+trunkh+20);
context.arc(startx+trunkw+bodyw+20,starty+trunkh+20,20,0,360);

context.stroke();

context.restore();



