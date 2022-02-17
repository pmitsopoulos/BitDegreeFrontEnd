"use strict";
const cat1 = {
    id: 1,
    name: "Kitchenware",
    sale_amount: 0.25
};
const cat2 = {
    id: 2,
    name: "Gym",
    sale_amount: 0.30
};
const product1 = {
    id: 1,
    name: "Big Knife",
    price: 8,
    category_id: 1
};
const product2 = {
    id: 2,
    name: "Pan",
    price: 20,
    category_id: 1
};
const product3 = {
    id: 3,
    name: "Runway",
    price: 200,
    category_id: 2
};
const salePriceReturn = (p, cat) => {
    return p.category_id == cat.id ? (p.price * (1 - cat.sale_amount)).toFixed(2) : "wrong category";
};
console.log(salePriceReturn(product3, cat2));
