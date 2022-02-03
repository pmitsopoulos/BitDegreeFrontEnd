"use strict";

const allDivs = document.getElementsByTagName("div");

console.log(allDivs);

const cont1 = document.getElementById("container_1");

console.log(cont1);


const allTexts = document.getElementsByClassName("text");

console.log(allTexts);


const cont2 = document.querySelector("#container_2"); 

console.log(cont2);

const firstText = document.querySelector(".text");

console.log(firstText);

const texts = document.querySelectorAll(".text");

console.log(texts);

const cont1Text = document.querySelector("#container_1 .text");

console.log(cont1Text);