let activePhoto = document.querySelector('.active-photo');
let previewList = document.querySelectorAll('.preview-list li a');

for (let preview of previewList) {
    preview.addEventListener('click', (evt) => {
        evt.preventDefault();

        activePhoto.src = preview.href;

        let currentActive = document.querySelector('.preview-list .active-item');
        currentActive.classList.remove('active-item');
        preview.classList.add('active-item');
    });
}