const container = document.querySelector(".container");
const button = document.querySelector("#numSquares");

function createGrid(size) {
  container.innerHTML = "";
  const cellSize = 100 / size;

  for (let i = 0; i < size * size; i++) {
    let squares = document.createElement("div");
    squares.addEventListener("mouseover", (e) =>
      e.target.classList.add("my-colour-class")
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
