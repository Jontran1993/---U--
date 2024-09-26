document.querySelector("nav .burger.hidden-desktop").onclick = () => {
    openMainNav()
}
document.querySelector(".hidden-main-nav").onclick = () => {
    closeMainNav()
}
function openMainNav() {
    let nav = document.querySelector("ul.main-nav")
    if(!nav.className.includes("active"))
        nav.className+=" active"
}
function closeMainNav() {
    let nav = document.querySelector("ul.main-nav")
    if(nav.className.includes("active"))
    nav.className=nav.className.replace(" active","")
}