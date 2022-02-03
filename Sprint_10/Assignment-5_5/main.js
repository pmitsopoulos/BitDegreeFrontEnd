/* Write your code here */

const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const grandChild = document.querySelectorAll(".grand-child");

console.log(grandParent);
console.log(parent);
console.log(child);
console.log(grandChild);

parent.addEventListener("click", function (event) {
  const d = event.target;
  if (d.classList.contains("parent") || d.classList.contains("child"))
  {
    event.stopPropagation();
  }
  d.classList.toggle("red");
});