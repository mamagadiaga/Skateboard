
const icons = document.querySelectorAll('.menuicon');


const colors = ['#ff7551', '#ffae65', '#32a7e2', '#6c5ecf', '#ffae00',  '#00bcd4', '#9c27b0', '#163efd', '#4caf50'];

const initialColors = [];

function changeBackgroundColor(event) {
  const index = Array.from(icons).indexOf(event.target); 

  if (!initialColors[index]) {
    initialColors[index] = event.target.style.backgroundColor;
  }

  event.target.style.backgroundColor = colors[index]; 
}

function resetBackgroundColor(event) {
  const index = Array.from(icons).indexOf(event.target); 
  event.target.style.backgroundColor = initialColors[index]; 
}


icons.forEach(icon => {
  icon.addEventListener('mouseover', changeBackgroundColor);
  icon.addEventListener('mouseout', resetBackgroundColor);
});
