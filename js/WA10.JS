//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

//It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

//Willy the Goblin
//Big Daddy
//Father Christmas

//the soup kitchen
//Disneyland
//the White House

//spontaneously combusted
//melted into a puddle on the sidewalk
//turned into a slug and crawled away

const storyText =
  "It was a chilly 45 fahrenheit outside, so :insertx: decided to venture into the mysterious :inserty:. Upon reaching the center, he gaped in awe at the sight of a dragon made entirely of scoops of mint chocolate chip ice cream, breathing frosty breath. Fearing his ice cream would melt, :insertx: quickly snapped a selfie his friend randomName and the frosty beast and dashed out, leaving behind a trail of :insertz:.";
const insertx = [
  "Will Zippy McZapface",
  "Giggles McFuzzbucket",
  "Twinkle Toes TruffleSniffer",
];
const inserty = ["closet", "cave", "forest"];
const insertz = [
  "giggles and slippery slides",
  "snickers and cool impressions",
  "chuckles and chilly echoes",
];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertx);
  const yItem = randomValueFromArray(inserty);
  const zItem = randomValueFromArray(insertz);

  newStory = newStory
    .replaceAll(":insertx:", xItem)
    .replace(":inserty:", yItem)
    .replace(":insertz:", zItem);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("randomName", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + "stone";
    const temperature = Math.round((45 - 32) * (5 / 9)) + " centigrade";

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("45 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
