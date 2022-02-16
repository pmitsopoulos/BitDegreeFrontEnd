enum TimeOfDay{
    Morning = "Good Morning",
    Afternoon = "Good Afternoon",
    Evening = "Good Evening"
}

interface Customer {
    Name: string,
    LoyaltyClubStatus: boolean,
    TimesVisited: number,
}

const Gab : Customer = {
    LoyaltyClubStatus:false,
    Name:"Gabriel",
    TimesVisited:2
};

const greeting = function (timeBasedGreeting: TimeOfDay, Customer : Customer){
    
    let greet = `Hello and ${timeBasedGreeting} ${Customer.Name}!`;
    greet += Customer.LoyaltyClubStatus 
    ? `You are registered to our club, special offers are available for you!` 
    : `You are not registered in our club. Would you like to become a member? Special offers are available to our registered Customers!`;


    console.log(greet)
}


greeting(TimeOfDay.Morning , Gab);