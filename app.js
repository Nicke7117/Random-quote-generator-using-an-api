let btn = document.getElementById("button");

btn.addEventListener("click", getQuote);

async function getQuote(){
    
    let response = await fetch(encodeURI("https://ron-swanson-quotes.herokuapp.com/v2/quotes"));
    console.log(encodeURI("https://ron-swanson-quotes.herokuapp.com/v2/quotes"));
    let quote = await response.json();
    document.getElementById("quote").textContent = quote;

}

getQuote().catch(error => console.log("error"));