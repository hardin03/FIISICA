const nav = document.querySelector ('#nav');
const btnDeploy = document.querySelector ("#deploy");
const dropdown = document.querySelector ('#dropdown-list');
const btnDeployLeft = document.querySelector ('#btn-left')
const bars = document.querySelector ('#bar-toggle');
var cntDeploy = 0;
var cntBars = 0;
var cntDeployLeft = 0;

//Desplegar "RECURSOS"
const deploy = () =>{
    if (cntDeploy == 0) {
        btnDeploy.classList.add ('rotate');
        dropdown.style.height = `200px`;
        
        cntDeploy = 1;
    }
    else {
        btnDeploy.classList.remove('rotate');
        dropdown.style.height = `0`;
        cntDeploy = 0;
    }
}
btnDeploy.addEventListener ('click', deploy, true);


//desplegar en pantalla mobile el menu
const deployLeftBars = () => {
    if (cntBars == 0) {
        bars.classList.add('white');
        nav.classList.add ('visible');
        cntBars = 1;
    }   else {
        bars.classList.remove('white');
        nav.classList.remove ('visible');
        btnDeploy.classList.remove ('rotate');
        dropdown.style.height = `0`;
        cntDeploy = 0;
        cntBars = 0;
    }
}
bars.addEventListener ('click', deployLeftBars, true);



btnDeployLeft.addEventListener ('click', deployLeft, true);