let lune = document.getElementById('lune');
let navbar = document.getElementById('navbar');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    lune.style.marginTop = value * -0.5 + 'px';
    lune.style.marginLeft = value * -0.5 + 'px';

    navbar.style.marginTop = value * -0.5 + 'px';

});
