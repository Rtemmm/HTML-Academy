let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');

let cardsList = document.querySelector('.cards');

gridViewButton.addEventListener('click', () => {
    cardsList.classList.remove('list');

    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');

    gridViewButton.disabled = true;
    listViewButton.disabled = false;
});

listViewButton.addEventListener('click', () => {
    cardsList.classList.add('list');

    gridViewButton.classList.remove('active');
    listViewButton.classList.add('active');

    gridViewButton.disabled = false;
    listViewButton.disabled = true;
});