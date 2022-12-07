const menu = document.getElementById("menu");

function parallax(){
    Array.from(document.getElementsByClassName("menu-item"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                menu.style.setProperty("--active-index", index)
            }
        });
}