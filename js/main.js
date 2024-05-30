const carrusel = document.querySelector (".carrusel-slider");
let cntimg = 1;
let images = document.querySelectorAll (".carrusel-img");
setInterval (function (){
    let percentage = cntimg * (-100);
    carrusel.style.transform = "translateX(" +percentage + "%)";
    cntimg ++;
    if (cntimg > (images.length - 1)) {
        cntimg = 0;
    }
}, 4000);