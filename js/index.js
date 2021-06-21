const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuote = document.getElementById("btn");

let realData = "";
let quotesData = ""; 

const getNewQuotes = ()=> {
    let rnum = Math.floor(Math.random() * 1500) + 1;
    quotesData = realData[rnum];
    quotes.innerText = quotesData.text;
    if(quotesData.author === null) {
        author.innerText = "~by Unknown";
    }
    else {
        author.innerText = "~by " + quotesData.author;
    }
}

const getQuotes = async ()=> {
    let url = "https://type.fit/api/quotes";
    try {
        let data = await fetch(url);
        realData = await data.json();
        getNewQuotes();
    }
    catch(error) {
        console.log(error);
    }
}

newQuote.addEventListener("click", function() {
    getNewQuotes();
})

getQuotes();