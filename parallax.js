let lune = document.getElementById('lune');
let forest = document.getElementById('forest-font');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    lune.style.marginTop = value * -0.5 + 'px';
    lune.style.marginLeft = value * -0.5 + 'px';

    forest.style.marginTop = value * -1 + 'px';


});
