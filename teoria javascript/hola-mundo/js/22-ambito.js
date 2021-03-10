"use strict"

function holaMundo(texto){
    var hola_mundo = "Texto dentro de función";

    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);

// Las variables definidas dentro de una función no las puedo invocar fuera
// console.log(hola_mundo); Esto me sale not defined por definirse dentro de function holaMundo
// con toString pasamos un dato a string (para que sea una cadena de texto)