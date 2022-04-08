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

// const user1 = new User();

//const user1 = new User("Bruce","Wayne",35);

const controller = new Controller("Bruce","Wayne",43);
const controller1 = new Controller("Clark", "Kent",121, "Hope");

console.log(controller.model.bio());
console.log(controller.model.bioSlogan);
console.log(controller1.model.bioSlogan);

//controller.model.bio();

//console.log(user1);

