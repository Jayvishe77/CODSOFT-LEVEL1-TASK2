const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
    menuButton.classList.toggle('fa-close');
});

document.onscroll = () => {
    navbar.classList.remove('show');
    menuButton.classList.remove('fa-close');
}