import quotesJackHandey from "./quotes";

export function newQuote()
{
    const index = Math.round(Math.random() * (quotesJackHandey.length-1));
    return quotesJackHandey[index];
}

const quote = newQuote();
