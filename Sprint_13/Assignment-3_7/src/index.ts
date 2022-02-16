import fetch from 'node-fetch';

// enum TimeOfDay{
//     Morning = "Good Morning",
//     Afternoon = "Good Afternoon",
//     Evening = "Good Evening"
// }

// interface Customer {
//     Name: string,
//     LoyaltyClubStatus: boolean,
//     TimesVisited: number,
// }

// const Gab : Customer = {
//     LoyaltyClubStatus:false,
//     Name:"Gabriel",
//     TimesVisited:2
// };

// const greeting = function (timeBasedGreeting: TimeOfDay, Customer : Customer){

//     let greet = `Hello and ${timeBasedGreeting} ${Customer.Name}!`;
//     greet += Customer.LoyaltyClubStatus 
//     ? `You are registered to our club, special offers are available for you!` 
//     : `You are not registered in our club. Would you like to become a member? Special offers are available to our registered Customers!`;


//     console.log(greet)
// }


//greeting(TimeOfDay.Morning , Gab);

interface CustomerItem {
    id: number,
        name: string,
        address: {
            street: string,
            suite: string
        },
        company: {
            name: string
        }
}

interface Customer {
    id: number,
        name: string,
        street: string,
        company: string
}

type PromisedCustomer = Promise < Customer[] >

    const url = 'https://jsonplaceholder.typicode.com/users';
    const jsonDummyData = "./customers.json"

const fetchCustomers = async (url: string): PromisedCustomer => {
    const response = await fetch(url).then(response => response.json());
    return response.map((customer: CustomerItem): Customer => {
        return {
            id: customer.id,
            name: customer.name,
            street: `${customer.address.suite} ${customer.address.street}`,
            company: customer.company.name
        }})
}

fetchCustomers(url).then(users=>{console.log(users)});

//fetchCustomers(jsonDummyData).then(users=>{console.log(users)});