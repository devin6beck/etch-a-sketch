// lets make it so that you do not have to push any button to start filling
// in the grid. This will mean remove the gray button and add the function
// of that button to start() and reset().


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


start()

// function that runs when page loads to start the page off with a 16 by 16 grid
function start() {
  createDivs(16, 16);
  randomRGB();
  btnRest.addEventListener('click', reset);
}

// this function created the grid
function createDivs(col, rows) {
  for(let i  = 0; i < (col * rows); i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid black';
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.appendChild(div).classList.add('box');

  }
}

// function that fills the background of a box within the grid with a random
// RGB when mouseover. 
function randomRGB() {
  const boxs = container.querySelectorAll('.box'); 
  boxs.forEach(box => box.addEventListener('mouseover', () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    box.style.background = bgColor;
  }))
}

function grayColor() {
  const boxs = container.querySelectorAll('.box'); 
  boxs.forEach(box => box.addEventListener('mouseover', () => {
    if (!box.style.background || box.style.background === 'white') {
      box.style.background = "black";
    } else {
      box.style.background = "white";
    }

  }))
}


// function grayColor() {
//   const boxs = container.querySelectorAll('.box'); 
//   boxs.forEach(box => box.addEventListener('mouseover', () => {
//     box.style.background = 'black';
//   }))
// }

// function grayColor() {
//   const boxs = container.querySelectorAll('.box');
//   btnGray.textContent = 'Gray';
//   btnGray.addEventListener('click', () => {
//     // add EventListender for each box
//     boxs.forEach(box => box.addEventListener('mouseover', () => {
//       // each color has 255 possible shades. We want a random number between 0 and 255
//       let randomNumber = Math.floor(Math.random() * 255);
//       box.style.background = `rgb(${randomNumber}, ${randomNumber}, ${randomNumber})`
//     }))

//   })
//   buttonsContainer.appendChild(btnGray).classList.add('btn');
// }

// function that prompt user for a new grid size and then make a new empty
// grid from user defnied parameters. 
function reset() {
  let newSize = prompt("How big would you like the grid? Choose 1-100");
  if (newSize < 1 || newSize > 100) {
    alert("Please choose a number between 1 and 100. Try again")
  } else {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    createDivs(newSize, newSize);
    randomRGB();
  }
}