const button = document.querySelector("#button");
const heading = document.querySelector("#heading");

function askNameAndGreet() {
  const name = prompt("What is your name?");
  if (name) {
    heading.textContent = `Hello ${name}, nice to meet you.`;
  } else {
    heading.textContent = "Hello, nice to meet you.";
  }
}

button.addEventListener("click", askNameAndGreet);
