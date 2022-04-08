window.name = "my window"
window.sayHi =() => {
    console.log(`The ${this.name} says Hello!`)
};

window.sayHi();

class User{
    constructor(fname, lname, age, slogan){
        
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.bio = function(){
            return `${this.firstName} ${this.lastName}, is ${this.age} years old`;
            //console.log(`${this.firstName} ${this.lastName}, is ${this.age} years old.`);
        }
        this.bioSlogan =  `${this.bio()}, is and always will be ${slogan || this.slogan}!`;
        
    }
    //Default Values
    slogan="an ordinary human";
    firstName="";
    lastName="";
    age="";
    

    
}

class Controller {
    constructor(fname, lname, age,slogan){
        this.model = new User(fname, lname, age, slogan);
    }
}

const controller = new Controller("Bruce","Wayne",43);
const controller1 = new Controller("Clark", "Kent",121, "Hope");

console.log(controller.model.bioSlogan);
console.log(controller1.model.bioSlogan);