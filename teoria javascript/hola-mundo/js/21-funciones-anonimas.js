"use strict"

// Funciones anónimas
// Es una función que no tiene nombre

/* var pelicula = function(nombre){
    return "La película es: " + nombre;
} */

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5, 7, function(dato){
    console.log("La suma es: "+dato)
}, 
function(dato){
    console.log("La suma por dos es: ", (dato*2));
}
)

/* Una función de flecha se utiliza reemplazando function() por () => en una función de callback
Si además solo tiene un parámetro podría ponerse sin el paréntesis:
function(dato)
dato =>
Esas dos cosas serían iguales */
