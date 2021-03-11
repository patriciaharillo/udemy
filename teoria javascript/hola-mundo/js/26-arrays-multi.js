"use strict"

var categorias = ["acción", "terror", "comedia", "romántica"];
var peliculas = ["El diario de noa", "La vida es bella", "Spiderman", "Matrix"];

peliculas.sort(); //ordenar array por orden alfabético
peliculas.reverse(); // ordenar array poniéndole orden inverso
console.log(peliculas);

var cine = [categorias, peliculas];

/*
console.log(cine);
console.log(cine[0][1]);
console.log(cine[1][2]);
*/

// Operaciones en los arrays

/*
var elemento = prompt("Introduce tu película:");

while(elemento != "ACABAR"){
    peliculas.push(elemento); // Añadir un elemento al array
    elemento = prompt("Introduce tu película:");
}
*/
/*
var indice = peliculas.indexOf("Matrix");
console.log(indice);

if(indice > -1){
    peliculas.splice(indice, 1); // para eliminar un indice
}


console.log(peliculas);
*/
/*
var peliculas_string = peliculas.join(); // convierte un array en un string separado por comas
console.log(peliculas_string);

var cadena = "texto 1, texto 2, texto 3";
var cadena_array = cadena.split(", "); // convierte un array en un string separado por comas
console.log(cadena_array);
*/



