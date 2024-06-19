/* Defines body and subcontainer*/
const body = document.querySelector("body");
const subContainer = document.createElement("div");

/* Creates button element to adjust grid*/
const currentSize = document.createElement("h3");
const adjust = document.createElement("button");
const reset = document.createElement("button");

adjust.style.color = randomColor();

let size = 20;

function createGrid(size) {
  const grid = document.createElement("div");
  
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");

      row.appendChild(square);

      square.addEventListener('mouseover', function(mouseHover) {
        if (square.classList.contains("colored") == false) {
          square.style.backgroundColor = randomColor();
          square.classList.add("colored");
        }
      })
    }

    grid.appendChild(row);
  }

  return grid;
}

/* OPTIONS */
currentSize.textContent = size + " x " + size;
adjust.textContent = "Change Size";
reset.textContent = "Reset";
subContainer.classList.add("subContainer");

/* Creates and appends the grid/container to the body */
let container = createGrid(size);
container.classList.add("container");

/* Appends options to the top of the page, and the grid to the bottom*/
subContainer.appendChild(currentSize);
subContainer.appendChild(adjust);
subContainer.appendChild(reset);

body.appendChild(subContainer);
body.appendChild(container);

/* EVENT LISTENERS*/

/* Change Grid Size */
adjust.addEventListener('click', function(onClick) {
  valid = false;

  while (valid == false) {
    size = prompt("Enter grid size (ex, entering 4 yields a 4x4 grid, max size is 100)");
    valid = (size <= 100);
  }
  
  body.removeChild(container);
  
  currentSize.textContent = size + " x " + size;

  container = createGrid(size);
  container.classList.add("container");
  body.appendChild(container);
});

/* Color Square */
function randomColor(min = 100, max = 256) {
  let red = Math.floor(Math.random() * (max - min) + min);
  let green = Math.floor(Math.random() * (max - min) + min);
  let blue = Math.floor(Math.random() * (max - min) + min);

  output = "rgb(" + red + " " + green + " " + blue + ")";
  return output;
}

reset.addEventListener('click', function(onClick) {

});


