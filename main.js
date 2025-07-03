const backToTopElement = document.querySelector('.scroll');
const heroSectionElement = document.querySelector('.hero');

backToTopElement.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 1500) {
        backToTopElement.classList.remove("d-none");
    } else {
        backToTopElement.classList.add("d-none");
    }   

});