//select the new quote button using a new quer selcetor
//define a new variable
const btn = document.querySelector("#js-new-quote");
//add event listener
btn.addEventListener("click", getQuote);

const answerBtn = document.querySelector("#js-tweet");
//add event listener
answerBtn.addEventListener("click", getAnswer);

const answerText = document.querySelector("#js-answer-text");

const endPoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

let answer = " ";

async function getQuote() {
  //console.log("test");
  try {
    const response = await fetch(endPoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json["question"]);
    displayQuote(json["question"]);
    console.log(json["answer"]);
    answer = json["answer"];
    answerText.textContent = " ";
  } catch (err) {
    console.log(err);
    alert("Failed to fetch a new quote");
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.textContent = quote;
}

function getAnswer() {
  answerText.textContent = answer;
}

getQuote();
