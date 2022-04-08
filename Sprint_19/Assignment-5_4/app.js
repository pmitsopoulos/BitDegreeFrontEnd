const user ={
    firstName: "empty",
    lastName:"empty",
    age:0,

    viewUser: function( newfname, newlname, newage) {
        console.log(`First Name: ${newfname || this.firstName} | Last Name: ${newlname || this.lastName} | Age: ${newage || this.age}`);
    }
};

// const viewUser = (fname,lname,age) => {
//     console.log(`First Name: ${fname} | Last Name: ${lname} | Age: ${age}`);
// } 

//console.log(user);
//viewUser(user.firstName, user.lastName,user.age);0
user.viewUser();
user.viewUser("Clark","Kent",100);