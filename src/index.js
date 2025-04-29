import "./style.css"
import { homeCont } from "./pages/home.js"
import { menuCont } from "./pages/menu.js"
import { aboutCont } from "./pages/about.js"

const content = document.getElementById("content")


const homebtn = document.getElementById("homeBTN")
homebtn.addEventListener("click", () => {
    content.innerHTML = null
    content.append(homeCont)
})
const menubtn = document.getElementById("menuBTN")
menubtn.addEventListener("click", () => {
    content.innerHTML = null
    content.append(menuCont)
})
const aboutbtn = document.getElementById("aboutBTN")
aboutbtn.addEventListener("click", () => {
    content.innerHTML = null
    content.append(aboutCont)
})