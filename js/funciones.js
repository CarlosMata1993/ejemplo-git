//primer metodo

/*
const navegacion = document.querySelector("nav");
const abrir = document.querySelector(".abrir");
const cerrar = document.querySelector(".cerrar");

abrir.addEventListener("click", function(){
    navegacion.className = "desplegado";
});

cerrar.addEventListener("click", function(){
    navegacion.className = "";
});
*/

//segundo metodo

/*
const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir, .cerrar");
let desplegado = false;

botones[0].addEventListener("click", function(){
    navegacion.className = "desplegado";
});

botones[1].addEventListener("click", function(){
    navegacion.className = "";
});
*/

//tercer metodo

const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir, .cerrar");
let desplegado = false;

/*for(let i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", function(){
        navegacion.className = desplegado ? "" : "desplegado";
        desplegado = !desplegado
    });*/

    //otra manera
for(let i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", function(){
        navegacion.className = i == 0 ? "desplegado" : "";
    });
}