const container = document.querySelector(".container");
const button = document.querySelector("#numSquares");

for (let i = 0; i < 257; i++) {
  let div = document.createElement("div");
  div.addEventListener("mouseover", (e) =>
    e.target.classList.add("my-colour-class")
  );
  container.appendChild(div);
}
