
function createGrid(){
  const element = document.createElement('div');
  element.classList.add('square');

  return element;
}

let grid = document.getElementById('grid');

for(let i=0; i<100; i++){
  const square = createGrid();
  grid.appendChild(square);
}