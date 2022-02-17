"use strict";
const translateWord = {
    "en": {
        "greet": "Hello there!"
    }
};
function translate(lang, toBeTranslatedWord) {
    return translateWord[lang][toBeTranslatedWord];
}
console.log(translate("en", "greet"));
