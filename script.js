const container = document.querySelector(".container");
const button = document.querySelector("#numSquares");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Red: 0–255
  const g = Math.floor(Math.random() * 256); // Green: 0–255
  const b = Math.floor(Math.random() * 256); // Blue: 0–255
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
  container.innerHTML = "";
  const cellSize = 100 / size;

  for (let i = 0; i < size * size; i++) {
    let squares = document.createElement("div");
    squares.addEventListener(
      "mouseover",
      (e) => (e.target.style.background = getRandomColor())
    );
    squares.classList.add("div");
    squares.style.width = `${cellSize}%`;
    squares.style.height = `${cellSize}%`;

    container.appendChild(squares);
  }
}

button.addEventListener("click", () => {
  let input = parseInt(prompt("How many sqaure would you like to draw on?"));
  if (input > 100) {
    alert("cannot do more than 100 squares");
    return;
  }
  createGrid(input);
});

window.onload = () => {
  createGrid(16);
};
