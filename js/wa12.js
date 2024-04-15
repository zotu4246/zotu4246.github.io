const btn = document.querySelector("#js-new-quote");
btn.addEventListener("click", getQuote);

const answerBtn = document.querySelector("#js-tweet");
answerBtn.addEventListener("click", getAnswer);

const answerText = document.querySelector("#js-answer-text");

const endpoint = "https://official-joke-api.appspot.com/random_joke";

let answer = " ";

async function getQuote() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    console.log(json["setup"]);
    displayQuote(json["setup"]);
    console.log(json["punchline"]);
    answer = json["punchline"];
    answerText.textContent = " ";
  } catch (err) {
    console.log(err);
    alert("failed to fetch new quote ");
  }
}

function displayQuote(quoteText) {
  const quoteElement = document.querySelector("#js-quote-text");
  quoteElement.textContent = quoteText;
}

function getAnswer() {
  answerText.textContent = answer;
}

getQuote();
