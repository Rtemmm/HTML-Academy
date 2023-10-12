let blogArticleList = document.querySelectorAll('.blog-article');

for (let blogArticle of blogArticleList) {
    let moreButton = blogArticle.querySelector('.more');

    moreButton.addEventListener('click', () => {
        blogArticle.classList.remove('short');
    });
}