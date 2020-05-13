const barsBtn = document.getElementById("bars-active");
const timesBtn = document.getElementById("times-active");


barsBtn.onclick = menu;

timesBtn.onclick = menuHide;



function menu () {
    document.getElementById("nav__menu__active").style.display = "flex";
    document.getElementById("bars-active").style.display = "none";
    document.getElementById("times-active").style.display = "flex";
}



function menuHide () {
    document.getElementById("nav__menu__active").style.display = "none";
    document.getElementById("bars-active").style.display = "flex";
    document.getElementById("times-active").style.display = "none";
}











