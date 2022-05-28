const headNav = document.getElementsByClassName("header__nav__bar")[0]
const rightItems = document.getElementsByClassName("header__nav__link-list__right")[0]




// if ("(min-width: 601px)") {
//     rightItems.style.display = "flex"
// }

headNav.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 601px)")) {
        rightItems.classList.toggle("active")
    }

})