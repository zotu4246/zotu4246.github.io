const slider = document.getElementById("volume-slider");
const volumeLevel = document.getElementById("volume-level");

slider.addEventListener("input", function () {
  const reversedValue = 100 - this.value;
  volumeLevel.textContent = `${reversedValue} `;
});
