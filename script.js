let menuIcon = document.querySelector('#menu-icon');
let aboutmenu = document.querySelector('.about-menu');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    aboutmenu.classList.toggle('show');
}


function showMessage() {
    let confirmAction = confirm("Are you sure you want to go?");
      if (confirmAction) 
    window.location.href = " https://akashaware15.github.io/Sign-Up-page/";
}