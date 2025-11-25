// Get the container class to then later populate it 
// with cell grid
const size = 16; // for a 16x16 grid
const container = document.querySelector('.container');

for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener("mouseover", function(){
        console.log('Mouse over!');
        cell.style.backgroundColor = "red";
    });

    cell.addEventListener('mouseout', function() {
    // Code to execute when the mouse leaves the element or its children
        console.log('Mouse out!');
        cell.style.backgroundColor = ''; // Reset background
    });

    container.appendChild(cell);
}


