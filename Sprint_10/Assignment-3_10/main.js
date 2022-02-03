
const form = document.querySelector("#signUpForm");
console.log(form);

const formChildren = form.children;
console.log(formChildren);

const fName = form.children.fname;
const lName = form.children.lName;
const address1 = form.children.address1;
const address2 = form.children.address2;
const userCity = form.children.userCity;
const userState = form.children.userState;
const userPhone = form.children.userPhone;

form.addEventListener("mouseenter", function () {
  console.log("User considering sign-up...");
});

form.addEventListener("mouseleave", function () {
  console.log("User LEFT sign-up ...");
});