let btnMenu = document.querySelector(".botao-menu");
let nav = document.querySelector(".navegacao")

btnMenu.addEventListener("click", mostrarMenu)

function mostrarMenu() {
    nav.classList.toggle("ativo")   
}

