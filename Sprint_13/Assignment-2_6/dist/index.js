"use strict";
var TimeOfDay;
(function (TimeOfDay) {
    TimeOfDay["Morning"] = "Good Morning";
    TimeOfDay["Afternoon"] = "Good Afternoon";
    TimeOfDay["Evening"] = "Good Evening";
})(TimeOfDay || (TimeOfDay = {}));
const Gab = {
    LoyaltyClubStatus: false,
    Name: "Gabriel",
    TimesVisited: 2
};
const greeting = function (timeBasedGreeting, Customer) {
    let greet = `Hello and ${timeBasedGreeting} ${Customer.Name}!`;
    greet += Customer.LoyaltyClubStatus
        ? `You are registered to our club, special offers are available for you!`
        : `You are not registered in our club. Would you like to become a member? Special offers are available to our registered Customers!`;
    console.log(greet);
};
greeting(TimeOfDay.Morning, Gab);
