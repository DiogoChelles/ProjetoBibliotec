//* CÓDIGO DO DANIEL

// let btnMenu = document.querySelector(".botao-menu");
// let nav = document.querySelector(".navegacao")

// btnMenu.addEventListener("click", mostrarMenu)

// function mostrarMenu() {
//     nav.classList.toggle("ativo")   
// }

//* CÓDIGO DA PROF

const menu = document.getElementById("menu"); //pegando o elemento pelo ID

// estamos pegando o elemento de forma genérica - pode ser classe (precisa trazer o ponto) ou pode ser ID (precisa trazer a hashtag)
const navMenu = document.querySelector(".navegacao")

//menu.addEventListener("click", () => {}) //opção com arrow function -> função lambda -> é a mesma coisa que a função abaixo

menu.addEventListener("click", function() {

    if(navMenu.className == "navegacao") {
        navMenu.className = "navegacao ativo";
    }
    else {
        navMenu.className = "navegacao"
    }
})


