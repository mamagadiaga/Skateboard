//MENU
const icons = document.querySelectorAll('.menuicon');


const colors = ['#ff7551', '#ffae65', '#32a7e2', '#6c5ecf', '#ffae00', '#00bcd4', '#9c27b0', '#163efd', '#4caf50'];

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






//DETAILS
let contenu = document.querySelector('.contenu');

history.replaceState({ content: contenu.innerHTML }, null, null);

window.addEventListener('popstate', function (event) {
  if (event.state && event.state.content) {
    contenu.innerHTML = event.state.content;

    attachCardClickEvent();
  }
});


function cardClickHandler() {
  contenu.innerHTML = `
        PAGE DETAILS
    `;

  history.pushState({ content: contenu.innerHTML }, null, null);
}

function attachCardClickEvent() {
  let cards = document.querySelectorAll('.cardscard');

  cards.forEach(function (card) {
    card.removeEventListener('click', cardClickHandler);
  });


  cards.forEach(function (card) {
    card.addEventListener('click', cardClickHandler);
  });
}

attachCardClickEvent();
