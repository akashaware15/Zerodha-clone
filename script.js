let menuIcon = document.querySelector('#menu-icon');
let aboutmenu = document.querySelector('.about-menu');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    aboutmenu.classList.toggle('show');
}


function showMessage() {
    window.location.href = " https://akashaware15.github.io/Sign-Up-page/";
}