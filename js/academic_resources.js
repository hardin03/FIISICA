//Desplegar el menu a la derecha
const menu = document.querySelector ('.menu');
const item__left = document.querySelector ('.item__left');
var cntClickItem = 0;

const deploy__menu = () => {
    if (cntClickItem == 0) {
        menu.classList.add ('deploy');
        item__left.classList.add ('rotate');
        cntClickItem = 1;
    }   else {
        menu.classList.remove ('deploy');
        item__left.classList.remove ('rotate');
        cntClickItem = 0;
    }
}
item__left.addEventListener ('click', deploy__menu, true);

//Desplegar los capitulos en la barra de navegacion
let listElements = document.querySelectorAll ('.list__button-click');

listElements.forEach (listElement => {
  listElement.addEventListener ('click', () => {
    listElement.classList.toggle ('rotate');
    let height = 0;
    let menu = listElement.nextElementSibling;
    if (menu.clientHeight == "0") {
      height = menu.scrollHeight;
    }
    menu.style.height = `${height}px`;
  })
})

//Desplegar la información de los capitulos
let listElementsInfo = document.querySelectorAll ('.section__head')
listElementsInfo.forEach (listElement => {
  listElement.addEventListener ('click', () => {
    listElement.classList.toggle ('rotate');
    let heightInfo = 0;
    let info = listElement.nextElementSibling;
    if (info.clientHeight == "0") {
      heightInfo = info.scrollHeight + 20;
    }
    info.style.height = `${heightInfo}px`;
  })
})



