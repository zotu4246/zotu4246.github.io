const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const fileNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const alts = {
  "pic1.jpg": "close up of eye",
  "pic2.jpg": "rock",
  "pic3.jpg": "white and purple flowers",
  "pic4.jpg": "artwork",
  "pic5.jpg": "butterfly",
};

/* Looping through images */

for (const i of fileNames) {
  //constructing the src and alt text
  const nalt = alts[i];
  const nsrc = `../images/${i}`;

  //update  image for the thumbnail
  const newImage = document.createElement("img");
  newImage.setAttribute("src", nsrc);
  newImage.setAttribute("alt", nalt);
  thumbBar.appendChild(newImage);

  // change display image when a thumbnail is clicked
  newImage.addEventListener("click", () => {
    displayedImage.setAttribute("src", nsrc);
    displayedImage.setAttribute("alt", nalt);
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");

  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Normal";
    overlay.style.backgroundColor = "rgb(221, 39, 114, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Pinker";
    overlay.style.backgroundColor = "rgb(0, 0, 0, 0)";
  }
});
