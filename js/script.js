const navigation = document.getElementById('navigation');
const burger = document.getElementById('burger');


burger.addEventListener('click', () =>{
    console.log('works');
    navigation.classList.toggle('nav-hide');
});