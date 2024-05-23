const nav = document.querySelector("#nav");

const open = document.querySelector("#open");
const close = document.querySelector("#close");
const dropdown = document.querySelector("#dropdown-list");

const down = document.querySelector("#buttom-down");
const up = document.querySelector("#buttom-up");

const down_left = document.querySelector("#down-left");
const up_left = document.querySelector("#up-left");

open.addEventListener("click", () => {
    nav.classList.add("visible");
    dropdown.classList.remove("down");
})
close.addEventListener("click", () => {
    nav.classList.remove("visible");
    up_left.classList.add("invisible");
    down_left.classList.remove("invisible");
})


down.addEventListener("click", () => {
    dropdown.classList.add("down");
    down.classList.add("invisible");
    up.classList.remove("invisible");
})
up.addEventListener("click", () => {
    dropdown.classList.remove("down");
    down.classList.remove("invisible");
    up.classList.add("invisible");
})


down_left.addEventListener("click", () => {
    dropdown.classList.add("down");
    down_left.classList.add("invisible");
    up_left.classList.remove("invisible");
})
up_left.addEventListener("click", () => {
    dropdown.classList.remove("down");
    down_left.classList.remove("invisible");
    up_left.classList.add("invisible");
})