"use strict"

// Transformación de textos
var numero = 444;
var texto1 = "Bienvenido al curso de curso javascript";
var texto2 = "Es muy buen curso";

/*métodos de búsqueda
var busqueda = texto1.indexOf("curso"); // te da a partir de caracter está la palabra  
var busqueda = texto1.lastIndexOf("curso"); 
var busqueda = texto1.search("curso");
var busqueda = texto1.match("curso"); // es lo mismo que indexOf pero te devuelve un array 
var busqueda = texto1.match(/curso/g); // te devuelve un array cuando se repite la palabra (la g es global)
var busqueda = texto1.substr(14, 5); // me saca desde el caracter "14" los "5" caracteres en adelante 
var busqueda = texto1.charAt(12); // me saca el caracter número 12 de la variable 
var busqueda = texto1.startsWith("Bienvenido"); // te dice true si empieza por ese caracter
var busqueda = texto1.endsWith("javascript"); // te dice true si termina por ese caracter
var busqueda = texto1.includes("javascript"); // true si encuentra ese caracter
*/
/*métodos de reemplazo
var busqueda = texto1.replace("javascript", "symfony"); // me reemplaza el primer caracter por el segundo
var busqueda = texto1.slice(14); // me recorta a partir del caracter que le he puesto
var busqueda = texto1.slice(14, 22); // me recorta a partir del caracter que le he puesto hasta el que le he dicho
var busqueda = texto1.split(); //me lo divide según el parámetro que le pase (en este caso ninguno) en un array
var busqueda = texto1.split(" "); // me lo divide en los caracteres separados 
var busqueda = texto1.trim(); // me quita los espacios por delante y por detrás de la variable
*/


var busqueda = texto1.trim(); 
console.log(busqueda);