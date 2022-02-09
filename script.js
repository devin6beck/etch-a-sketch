const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const btnRest = document.createElement('button');

const topButtonContainer = document.getElementById("topButtonContainer");
const buttonsContainer = document.querySelector('.buttons');

btnRest.textContent = 'Rest';
// Keep 10px betweeen topButtonContainer and the container. 
topButtonContainer.style.marginBottom = '10px';
topButtonContainer.appendChild(btnRest).classList.add('btn');

function createDivs(col, rows) {
  for(let i  = 0; i < (col * rows); i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid red';
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.appendChild(div).classList.add('box');

  }
}

createDivs(16, 16);

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

grayColor();


btnRest.addEventListener('click', reset);

function reset() {
  let newSize = prompt("How big would you like the grid? Choose 1-100");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  createDivs(newSize, newSize);
}