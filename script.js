
// create variables that point to the HTML elements
const mainContainer = document.getElementById('mainContainer');
const topButtonContainer = document.getElementById('topButtonContainer');
const gridContainer = document.getElementById('gridContainer');


// create variables that point to newly created button elements
const newGridButton = document.createElement('button');

// put text in the newGridButton
newGridButton.textContent = 'New Grid';


// add 10px to the bottom margin of the topButtonContainer div and then 
// add the newGridButton to the topButtonContainer.
topButtonContainer.style.marginBottom = '10px';
topButtonContainer.appendChild(newGridButton);

// call the start function which creates a 16 by 16 grid
start();


// function that runs when page loads to start the page off with a 16 by 16 grid
function start() {
  createGrid(16, 16);
  newGridButton.addEventListener('click', newGrid)
}


// this function created the grid
function createGrid(columns, rows) {
  // for loop that loops while i is < (column * rows)
  for (let i = 0; i < (columns * rows); i++) {
    const div = document.createElement('div');
    div.style.border = '1px solid black';
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    gridContainer.appendChild(div).classList.add('box');
  }
  randomRGB();
}

// function that changes the background of the boxes in the grid to a random RGB
function randomRGB() {
  // create variable called boxes that selects everything inside gridContainer
  // that has a class of 'box'
  const boxs = gridContainer.querySelectorAll('.box');

  // forEach box add an event listener for 'mouseover' that changes the background
  // of that box to randome RGB. Each mouseover after the first mouseover should
  // makde the box darker until it is completly black.
  boxs.forEach((box) => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    box.addEventListener('mouseover', () => {
      box.style.background = `rgb(${x}, ${y}, ${z})`;
      x -= 25;
      y -= 25;
      z -= 25;
    })
  })
}


// function that prompt user for a new grid size and then make a new empty
// grid from user defnied parameters. 
function newGrid() {
  const newSize = prompt('How big would you like the new grid?' +
                        ' New value must be between 1 and 100.');

  if (newSize < 1 || newSize > 100) {
    alert("Value entered must be between 1 and 100. Try again.")
  } else {
    // delete the last grid
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.lastChild);
    }
    // create new grid and call the randomRGB function
    createGrid(newSize, newSize);
  }
}
