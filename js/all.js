const nav = document.querySelector ('#nav');
const btnDeploy = document.querySelector ("#deploy");
const dropdown = document.querySelector ('#dropdown-list');
const btnDeployLeft = document.querySelector ('#btn-left')
const bars = document.querySelector ('#bar-toggle');
var cntDeploy = 0;
var cntBars = 0;
var cntDeployLeft = 0;

const deploy = () =>{
    if (cntDeploy == 0) {
        btnDeploy.classList.add ('rotate');
        dropdown.classList.add('down');
        cntDeploy = 1;
    }
    else {
        btnDeploy.classList.remove('rotate');
        dropdown.classList.remove ('down');
        cntDeploy = 0;
    }
}
btnDeploy.addEventListener ('click', deploy, true);


const deployLeftBars = () => {
    if (cntBars == 0) {
        bars.classList.add('white');
        nav.classList.add ('visible');
        cntBars = 1;
    }   else {
        bars.classList.remove('white');
        nav.classList.remove ('visible');
        btnDeployLeft.classList.remove ('rotate');
        dropdown.classList.remove('down');
        cntDeployLeft = 0;
        cntBars = 0;
    }
}
bars.addEventListener ('click', deployLeftBars, true);


const deployLeft = () => {
    if (cntDeployLeft == 0) {
        btnDeployLeft.classList.add('rotate');
        dropdown.classList.add('down');
        cntDeployLeft = 1;
    }   else {
        btnDeployLeft.classList.remove ('rotate');
        dropdown.classList.remove('down');
        cntDeployLeft = 0;
    }
}
btnDeployLeft.addEventListener ('click', deployLeft, true);