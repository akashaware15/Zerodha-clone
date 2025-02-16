let menuIcon = document.querySelector('#menu-icon');
let aboutmenu = document.querySelector('.about-menu');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    aboutmenu.classList.toggle('show');
}

const cards = document.querySelectorAll('.member-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
});