"use strict"

// DOM - Document Object Model

function cambiaColor(color){
    caja.style.background = color; 
}


// var caja = document.getElementById("micaja"); //esta función te devuelve el valor del id correspondiente
                                                // el .innerHTML te devuelve el elemento HTML 
var caja = document.querySelector("#micaja");   // esta línea es igual que la de arriba
// CSS:
// con el # es para obtener un elemento por su id
// con el . es para la clase

caja.innerHTML = "TEXTO EN LA CAJA DESDE JS";
caja.style.background = "red"
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

console.log(caja);
