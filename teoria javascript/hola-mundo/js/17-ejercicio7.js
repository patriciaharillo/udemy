"use strict";

/*
Tabla de multiplicar de un número introducido por pantalla
*/
/*
var numero = parseInt(prompt("Introduce un número", 0));

document.write("<h1>Esta es la tabla de multiplicar de "+numero+ "</h1>");
for(var i = 0; i <= 10; i = i+1){
	document.write(i+" x "+numero+" = "+(i*numero)+ "</br>");
}
*/

// Todas las tablas de multiplicar

for(var c = 0; c <= 10; c = c+1){
	document.write("<h1>Esta es la tabla de multiplicar de "+c+ "</h1>");
	for(var i = 0; i <= 10; i = i+1){
		document.write(i+" x "+c+" = "+(i*c)+ "</br>");
	}
}