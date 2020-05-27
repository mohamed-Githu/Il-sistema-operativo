const box = document.querySelector(".navigation__checkbox");
const items = Array.from(document.querySelectorAll(".navigation__item"));


const uncheck = () => {
    box.checked = false;
}

items.forEach(item => {
    item.addEventListener("click", uncheck);
});
