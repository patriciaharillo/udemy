"use strict"

//Arrays, Arreglos, Matrices

var nombre = "Patricia Harillo";
var nombres = ["Patricia", "Lucia", "Carlos", "Marcos", "Leticia", 52, true];
                    
var lenguajes = new Array("php", "JS", "Go", "Java", "C#", "Pascal");

console.log(nombres[5]); // Para acceder a una posición concreta de un array
console.log(nombres.length); // Para saber la longitud de un array

/*
var elemento = parseInt(prompt("Que elemento del array quieres", 0));
if(elemento >= nombres.length){
    alert("Introduce el número correcto menor que "+ nombres.length);
}else{
    alert("El usuario seleccionado es "+ nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programación del 2018</h1>");

/*
function dimeCuantasLetras(lenguajes){
    for(var i = 0; i < lenguajes.length; i++){
        var elemento = lenguajes[i];
        document.write("La palabra "+ elemento + " tiene " + elemento.length + " letras </br>");   
    }
    return "Ha salido bien la función"; // ES NECESARIO PONER UN RETURN DENTRO DE LA FUNCIÓN SI QUIERES QUE DEVUELVA ALGO
}
console.log(dimeCuantasLetras(lenguajes));
console.log(dimeCuantasLetras(nombres));
*/

/*
lenguajes.forEach((elemento, i, data)=>{    // For each para recorrer arrays
    var elemento = lenguajes[i];
    document.write("La palabra "+ elemento + " tiene " + elemento.length + " letras </br>");     
});
*/

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");     
}   // es para recorrer un array como el forEach

// BÚSQUEDAS
var  precios = [10, 20, 50, 80, 12];
var busqueda = lenguajes.find(lenguaje => lenguaje == "php");   //me encuentra la palabra

console.log(busqueda);

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS"); // me encuentra el índice

console.log(busqueda);

var busqueda = precios.some(precios => precios >= 20); // me dice true o false si hay números mayores o iguales a 20

console.log(busqueda);

