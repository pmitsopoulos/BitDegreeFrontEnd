/* Write your code here */

const blurb = document.querySelector("#company-blurb");
const nav = document.querySelector("#navBar");

blurb.innerText="Replaced Blurb";

console.log(blurb);
console.log(nav);
console.log(nav.children)

const navbarChildren = nav.children;

console.log(navbarChildren);
console.log(navbarChildren.length);


for(let item of navbarChildren)
{
    nav.removeChild(item);
}

const list = [
  "Home",
  "About Me",
  "Portfolio",
  "Tech Blog / T.I.L.",
  "YouTube Channel",
  "Other Social Media",
  "Coding Meme of the Day",
];



list.forEach(function(item){
    const newChild = document.createElement("li");
  newChild.innerText = item;
  console.log(newChild);
  nav.appendChild(newChild);
});


