interface LanguageFeature{
    [language: string]:{
        [word: string] : string
    }
}

const translateWord: LanguageFeature = {
   "en":{
        "greet": "Hello there!"
   }
}

interface numberDict{
    [language :string]:{
        [num: number] : string
}
}
const translateNumber: numberDict ={
    "en":{
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five"
    }
}

function translate (language:string, toBeTranslated : number | string ):string{
    if(typeof toBeTranslated == "number")
    {
        const purchases_left = 5-toBeTranslated;
        return `Thank you for your purchase, you have ${translateNumber[language][purchases_left]} purchases available.`;
    }
    else if (typeof toBeTranslated =="string")
        {
        return translateWord[language][toBeTranslated];
    }
    return "Incorrect Input";
    
}
console.log(translate("en","greet"));
console.log(translate("en",1));