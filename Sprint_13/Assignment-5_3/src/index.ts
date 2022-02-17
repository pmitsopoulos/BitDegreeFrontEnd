type Category =
{
    id:number;
    name:string;
    sale_amount:number;
}

type Product = {
    id:number;
    name:string;
    price:number;
    category_id:number;
}

const cat1: Category=
{
    id: 1,
    name: "Kitchenware",
    sale_amount: 0.25 
}

const cat2: Category=
{
    id: 2,
    name: "Gym",
    sale_amount: 0.30 
}



const product1: Product = {
    id:1,
    name:"Big Knife",
    price:8,
    category_id:1
}
const product2: Product = {
    id:2,
    name:"Pan",
    price:20,
    category_id:1
}
const product3: Product = {
    id:3,
    name:"Runway",
    price:200,
    category_id:2
}

const salePriceReturn =<T extends Product, U extends Category> 
                            (p: T, cat: U)
                             : string => 
{
   return p.category_id == cat.id ? (p.price*(1-cat.sale_amount)).toFixed(2) : "wrong category";   
}

console.log(salePriceReturn(product3,cat2));