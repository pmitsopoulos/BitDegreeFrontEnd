"use strict";
var BrewType;
(function (BrewType) {
    BrewType["cappuccino"] = "Cappuccino";
    BrewType["freddo"] = "Freddo";
    BrewType["espresso"] = "Espresso";
    BrewType["decaf"] = "Decaf";
})(BrewType || (BrewType = {}));
var DairyType;
(function (DairyType) {
    DairyType["evaporated"] = "Evaporated Milk";
    DairyType["fullcream"] = "Milk Cream";
    DairyType["milk"] = "Liquid Milk";
})(DairyType || (DairyType = {}));
const coffee1 = {
    sizeml: 200,
    typeofcoffee: BrewType.freddo,
    typeofmilk: DairyType.fullcream
};
console.log(coffee1);
