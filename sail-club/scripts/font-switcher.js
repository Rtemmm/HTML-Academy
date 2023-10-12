let serifButton = document.querySelector('.font-button-sans-serif');
let sansSerifButton = document.querySelector('.font-button-serif');

sansSerifButton.addEventListener('click', () => {
    document.body.classList.add('serif');

    sansSerifButton.classList.add('active');
    serifButton.classList.remove('active');

    sansSerifButton.disabled = true;
    serifButton.disabled = false;
});

serifButton.addEventListener('click', () => {
    document.body.classList.remove('serif');

    sansSerifButton.classList.remove('active');
    serifButton.classList.add('active');

    sansSerifButton.disabled = false;
    serifButton.disabled = true;
});