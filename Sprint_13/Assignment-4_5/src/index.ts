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


function translate(lang : string, toBeTranslatedWord: string) : string
{
    return translateWord[lang][toBeTranslatedWord];
}

console.log(translate("en", "greet"));