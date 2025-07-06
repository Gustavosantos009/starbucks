let menu = document.getElementById("menu")
let btn_menu = document.getElementById("btn_menu")

function abrirMenu(){
    menu.classList.toggle("active")
    btn_menu.classList.toggle("active")
    document.body.classList.toggle("barra-none")
}
btn_menu.addEventListener("click",abrirMenu);