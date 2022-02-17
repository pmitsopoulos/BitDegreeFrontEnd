import fetch from 'node-fetch';

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


interface AlbumItem{
    id:number,
    userId: number,
    title:string
}
interface Customer {
    id: number,
    name: string,
    street: string,
    company: string
}

interface Album{
    album_id:number,
    title:string
}
const isCustomerItem = (variableToCheck: any): variableToCheck is CustomerItem => {  
    return variableToCheck.company !== undefined;
  }
  
  type PromisedCustomer = Promise<Customer[] | Album[]>
  
  type PromisedCustomerData<T> = T extends Promise<Customer[] | Album[]> ? T : never;
    const url = 'https://jsonplaceholder.typicode.com/users';
    const imgUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';
    //const jsonDummyData = "./customers.json"

const fetchCustomers = async (url: string): PromisedCustomerData<PromisedCustomer> => {
    
    
    const response = await fetch(url).then(response => response.json());
    
    return response.map((item: CustomerItem | AlbumItem): Customer | Album => {
        if(isCustomerItem(item))
        {
            return {
                id: item.id,
                name: item.name,
                street: `${item.address.suite} ${item.address.street}`,
                company: item.company.name
            }}
            else{
                return{
                    album_id: item.id,
                    title: item.title
                }
            }
        });
}



fetchCustomers(imgUrl).then(users=>{console.log(users)});
fetchCustomers(url).then(users=>{console.log(users)});
console.log("---------------------------------------------------");
