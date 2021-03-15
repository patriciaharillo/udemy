"use strict"

/*
1. Pida 6 números por pantalla y los meta en un array
2. Tiene que mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice. 
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h2>Contenido del array "+textoCustom+"</h2>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {    // elemento es cada valor del array
        document.write("<li><strong>"+elemento+"</strong></br></li>");
    })
    document.write("</ul>");
    return "hola"
}

//Pedir 6 números
var numeros = new Array(6);

for(var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("Introduce un número", 0));
}
//Mostrar el array en la consola
console.log(numeros);


// Ordenar y mostrar
numeros.sort(); // sirve para ordenar el array
console.log(numeros);
var prueba = mostrarArray(numeros, "ordenado");
console.log(prueba);

// Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, "revertido");

// Cuantos elementos tiene un array
console.log(numeros.length);

// Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice. 
var cantantes = new Array("taylor swift", "amaia", "queen", "harry styles", "britney spears");
var dameUnCantante = prompt("Dime un cantante", "");
var indice = cantantes.indexOf(dameUnCantante);
console.log(indice);
if (indice > -1){
    document.write("<h2>Tu elemento está dentro del array</h2>");
}else{
    document.write("<h2>NO ENCONTRADO</h2>");
}

