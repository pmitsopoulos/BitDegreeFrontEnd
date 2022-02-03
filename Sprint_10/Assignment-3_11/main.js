const form = document.querySelector("#signUpForm");
console.log(form);

const formElements = form.children;
console.log("Here's the form.children elements:");
console.log(formElements);

const fName = form.children.fname;
const lName = form.children.lName;
const address1 = form.children.address1;
const address2 = form.children.address2;
const userCity = form.children.userCity;
const userState = form.children.userState;
const userPhone = form.children.userPhone;

form.addEventListener("mouseenter", function () { console.log("User considering sign-up ..."); });

form.addEventListener("mouseleave", function () { console.log("User LEFT sign-up ..."); });


/*
for (let i of formElements) {
  i.addEventListener("mouseenter", function () {
    const field = i.getAttribute("id");
    console.log(`User considering ${field} field`);
  });

  i.addEventListener("blur", function () {
    i.setAttribute("style", "color:black; background:white");

  });

  i.addEventListener("click", function () {
    const field = i.getAttribute("id");
    console.log(`User selected ${field} field`);
    i.setAttribute("style","color:white; background:black");

  });
  }
*/

  fName.onclick = function () {
    console.log("User **SELECTED** first name field...");
    fName.setAttribute("style", "color:white; background:black");
  };
  lName.onclick = function () {
    console.log("User **SELECTED** last name field...");
    lName.setAttribute("style", "");
  };
  address1.onclick = function () {
    console.log("User **SELECTED** address1 field...");
    address1.setAttribute("style", "color:white; background:black");
  };
  address2.onclick = function () {
    console.log("User **SELECTED** address2 field...");
    address2.setAttribute("style", "color:white; background:black");
  };
  userCity.onclick = function () {
    console.log("User **SELECTED** city field...");
    userCity.setAttribute("style", "color:white; background:black");
  };
  userState.onclick = function () {
    console.log("User **SELECTED** state field...");
    userState.setAttribute("style", "color:white; background:black");
  };
  userPhone.onclick = function () {
    console.log("User **SELECTED** phone field...");
    userPhone.setAttribute("style", "color:white; background:black");
  };

fName.onblur = function () {
  fName.setAttribute("style", "color:black; background:white; border-color: rgb(119, 136, 153)");
};
lName.onblur = function () {
  lName.setAttribute("style", "color:black; background:white; border-color:rgb(119, 136, 153)");
};
address1.onblur = function () {
  address1.setAttribute("style", "color:black; background:white; border-color:rgb(119, 136, 153)");
};
address2.onblur = function () {
  address2.setAttribute("style", "color:black; background:white; border-color:rgb(119, 136, 153)");
};
userCity.onblur = function () {
  userCity.setAttribute("style", "color:black; background:white; border-color:rgb(119, 136, 153)");
};
userState.onblur = function () {
  userState.setAttribute("style", "color:black; background:white; border-color:rgb(119, 136, 153)");
};
userPhone.onblur = function () {
  userPhone.setAttribute("style", "color:black; background:white; border-color:rgb(119, 136, 153)");
};
