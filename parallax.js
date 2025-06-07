let lune = document.getElementById('lune');
let forest = document.getElementById('forest-font');
let love = document.getElementById('love');
let career = document.getElementById('mycareer'); 
let font2 = document.getElementById('font-2'); 




window.addEventListener('scroll', () => {
    let value = window.scrollY;
    lune.style.marginTop = value * -0.5 + 'px';
    lune.style.marginLeft = value * -0.5 + 'px';
    love.style.marginRight = value * -0.01 + 'em';
    forest.style.marginTop = value * -1 + 'px';
    career.style.marginLeft = value * -1 + 'px';
    font2.style.marginRight = value * -1 + 'px';


});
