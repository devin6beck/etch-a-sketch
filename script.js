// create variables that point to the HTML elements
const container = document.getElementById('gridContainer');
const topButtonContainer = document.getElementById("topButtonContainer");
const buttonsContainer = document.querySelector('.buttons');

// create variables that point to newly created button elements
const btnGray = document.createElement('button');
const btnRest = document.createElement('button');

// put text in the btnReset
btnRest.textContent = 'Rest';

// add 10px to the bottom margin of the topButtonContainer div and then 
// add the btnRest to the topButtonContainer.
topButtonContainer.style.marginBottom = '10px';
topButtonContainer.appendChild(btnRest).classList.add('btn');

// Start the page off with a 16 by 16 grid.
start()

function start() {
  createDivs(16, 16);
  grayColor();
  btnRest.addEventListener('click', reset);
}

// this function created the grid
function createDivs(col, rows) {
  for(let i  = 0; i < (col * rows); i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid red';
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.appendChild(div).classList.add('box');

  }
}


function grayColor() {
  const boxs = container.querySelectorAll('.box');
  btnGray.textContent = 'Gray';
  btnGray.addEventListener('click', () => {
    // add EventListender for each box
    boxs.forEach(box => box.addEventListener('mouseover', () => {
      // each color has 255 possible shades. We want a random number between 0 and 255
      let randomNumber = Math.floor(Math.random() * 255);
      box.style.background = `rgb(${randomNumber}, ${randomNumber}, ${randomNumber})`
    }))

  })
  buttonsContainer.appendChild(btnGray).classList.add('btn');
}


function reset() {
  let newSize = prompt("How big would you like the grid? Choose 1-100");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createDivs(newSize, newSize);
  grayColor();
}