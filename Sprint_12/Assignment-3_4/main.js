"use strict";

console.log("Im working");

const button = document.querySelector("#drawToggle");

const canvas = document.querySelector("#canvas");

canvas.style.border = "1px dotted blue"

const ctx = canvas.getContext("2d");

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';


let entryClickX;
let entryClickY;

let exitClickX;
let exitClickY;



let userIsInDrawingMode = false;

//let firstClick = false;

canvas.addEventListener("mouseout",()=>{
    userIsInDrawingMode=false;
    button.style.background="red";
});

canvas.addEventListener("mousedown", function (event) {

    userIsInDrawingMode = true;

    button.style.background="green";

    entryClickX = event.layerX;
    entryClickY = event.layerY;

    moveCursor(entryClickX,entryClickY);
    
    /*
    if(userIsInDrawingMode)
    {
        if (firstClick) {
            console.log(event);
            entryClickX = event.layerX;
            entryClickY = event.layerY;
            console.log(`x: ${entryClickX}, y: ${entryClickY}`);
            firstClick = true;
            moveCursor(entryClickX,entryClickY);
        } else {
            console.log(event);
            exitClickX = event.layerX;
            exitClickY = event.layerY;
            console.log(`x: ${exitClickX}, y: ${exitClickY}`);
            firstClick = false;
            draw(exitClickX,exitClickY);
        }
    }
    */
});

canvas.addEventListener("mouseup",function(event){
    userIsInDrawingMode = false;
    button.style.background="red";

    exitClickX = event.layerX;
    exitClickY = event.layerY;

    draw(exitClickX,exitClickY);
});


function moveCursor(x,y)
{
    ctx.beginPath();

    ctx.moveTo(x,y);
}

function draw(x,y)
{
    ctx.lineTo(x,y);

    ctx.stroke();
}