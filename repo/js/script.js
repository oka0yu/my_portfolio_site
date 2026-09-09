/*
LOADING
================================================================================ */
const loadingAreaBlack = document.querySelector('#loading');
//const loadingAreaWhite = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading img');

window.addEventListener('load', () => {
    loadingAreaBlack.animate({opacity: [1,0],visibility: 'hidden',},
    {duration: 2000, delay: 800, easing: 'ease', fill: 'forwards',});

//    loadingAreaWhite.animate({opacity: [1,0],visibility: 'hidden',},
//    {duration: 2000, delay: 800, easing: 'ease', fill: 'forwards',});
    
    loadingText.animate([{opacity: 1, offset: .8},{opacity: 0, offset: 1},],
    {duration: 1600, easing: 'ease', fill: 'forwards',});
});

/*
HUMBERGER MENU
================================================================================ */
const toggleMove = document.querySelector('.Toggle');
const menuMove = document.querySelector('.menu');

toggleMove.addEventListener('click', () => {
    toggleMove.classList.toggle('active');
    menuMove.classList.toggle('open');
});
