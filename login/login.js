// console.log("Hello World!!");

// alert("Hello World!!");

// var nome = "Késsia"

// let nome = "Késsia";
// console.log(nome);

// const nome = "Késsia";
// console.log(nome);

// nome = "Pedro";
// console.log(nome);

const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");


btnSenha.addEventListener("click", function() {

    // if(campoSenha.type == "password") {
    //     campoSenha.type = "text";
    // }
    // else {
    //     campoSenha.type = "password";
    // }

    campoSenha.type = campoSenha.type == "password" ? "text" : "password";

})

