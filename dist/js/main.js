const menuBtn= document.querySelector('.menu-btn');
const humburger = document.querySelector('.menu-btn_burgar');
const nav = document.querySelector('.nav');
const menuNav= document.querySelector('.menu-nav')

let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        humburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        showMenu = true;

    }else{
        humburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        showMenu = false;
    }
}