
// V1
// const nav = document.getElementById("primary-navigation")
// const menu = document.getElementsByClassName("mobile-nav-toggle").item(0)
// let isShow = false

// const showMenu = () => {
//   if(isShow) {
//     nav.style.transform = "translateX(100%)"
//     menu.style.backgroundImage = "url(./img/shared/icon-hamburger.svg)"
//     isShow = false

//   }else{
//     nav.style.transform = "translateX(0)"
//     menu.style.backgroundImage = "url(./img/shared/icon-close.svg)"
//     isShow = true
//   }
// }
// menu.addEventListener('click',showMenu)

// V2
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})