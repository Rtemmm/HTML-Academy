let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');

themeButtonDark.addEventListener('click', () => {
    document.body.classList.add('dark');

    themeButtonLight.classList.remove('active');
    themeButtonDark.classList.add('active');

    themeButtonDark.disabled = true;
    themeButtonLight.disabled = false;
});

themeButtonLight.addEventListener('click', () => {
    document.body.classList.remove('dark');

    themeButtonLight.classList.add('active');
    themeButtonDark.classList.remove('active');

    themeButtonDark.disabled = false;
    themeButtonLight.disabled = true;
});

