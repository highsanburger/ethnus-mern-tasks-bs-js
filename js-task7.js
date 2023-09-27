const trainImage = document.getElementById("train");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

let animationInterval;
let isMoving = false;
let currentLeft = -trainImage.clientWidth;

function moveTrain() {
  if (currentLeft >= window.innerWidth) {
    currentLeft = -trainImage.clientWidth;
  }

  currentLeft += 5; // Adjust the value to control the speed of motion
  trainImage.style.left = `${currentLeft}px`;
}
startButton.addEventListener("click", () => {
  if (!isMoving) {
    animationInterval = setInterval(moveTrain, 10); // Adjust the interval for smoother motion
    isMoving = true;
  }
});

stopButton.addEventListener("click", () => {
  if (isMoving) {
    clearInterval(animationInterval);
    isMoving = false;
  }
});

// Initial setup
trainImage.style.position = "absolute";
trainImage.style.left = `${currentLeft}px`;
// trainImage.style.top = "0";

