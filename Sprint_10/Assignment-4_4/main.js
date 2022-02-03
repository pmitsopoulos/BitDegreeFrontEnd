const $b1 = $("#box1");
const $b2 = $("#box2");

const vare1 = $("#box1").dblclick(function (e) {
  console.log("JQuery was used on a double-click!");
  const element = e.target;
  console.log(element);
  if (element.style.fontSize == "100px") {
    element.style.fontSize = "45px";
  }
  else {
    element.style.fontSize = "100px";
  }
});

const vare2 = $("#box2").mouseenter(function (e) {
  console.log("JQuery was used on a mouse hover!");
  const element = e.target;
 
 
  element.style.borderColor = "red";
 
  
});

$("#box2").mouseleave(function (e) {
  const element = e.target;
  element.style.borderColor="black"
});