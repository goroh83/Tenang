const burger = document.querySelector('.nav__menu');
const navigation = document.querySelector('nav');
const navigationList = document.querySelector('.navigation');
const closeX = document.querySelector('.nav__close');
const toggle = document.querySelector('.toggle');
const burger1 = document.querySelector('.bar1');
const burger2 = document.querySelector('.bar2');
const burger3 = document.querySelector('.bar3');
const burger4 = document.querySelector('.bar4');

const mapSmall = document.querySelector('.map-sm');
const mapLarge = document.querySelector('.map-lg');



toggle.addEventListener('click', () => {
    burger1.classList.toggle('bar1active');
    burger2.classList.toggle('bar2active');
    burger3.classList.toggle('bar3active');
    burger4.classList.toggle('bar4active');
    navigation.classList.toggle('unhide');  
    navigationList.classList.toggle('nav-unhide');
});

mapSmall.addEventListener('click', () => {
    mapLarge.classList.toggle('map-lg-show');
    mapSmall.classList.toggle('map-sm-hide');
});

mapLarge.addEventListener('click', () => {
    mapLarge.classList.toggle('map-lg-show');
    setTimeout( () => {
        mapSmall.classList.toggle('map-sm-hide'); 
    }, 400);   
});