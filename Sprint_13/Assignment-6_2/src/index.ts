enum BrewType{
    cappuccino = "Cappuccino",
    freddo = "Freddo",
    espresso = "Espresso",
    decaf = "Decaf"
}

enum DairyType{
    evaporated = "Evaporated Milk",
    fullcream = "Milk Cream",
    milk = "Liquid Milk"
}

interface CoffeeSelection{
    sizeml: number,
    typeofcoffee:BrewType,
    typeofmilk?:DairyType,
    additions?:string[]
}

const coffee1: CoffeeSelection = {
    sizeml: 200,
    typeofcoffee: BrewType.freddo,
    typeofmilk: DairyType.fullcream
}

console.log(coffee1);