const menu = document.getElementById("menu");

function parallax(x) {
    menu.style.setProperty("--active-index", x.dataset.index);
    // console.log(menu.dataset.activeIndex);
    // console.log(x.dataset.index);
}