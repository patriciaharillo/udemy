"use strict"

/* 
Hacer un programa que muestre todos los números entre dos números introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce un número", 0));
var numero2 = parseInt(prompt("Introduce otro número", 0));

document.write("<h1>De "+numero1+" a "+numero2+" están estos números:</h1>");
for(var i = numero1; i < numero2; i=i+1){	// i++ es igual que i=i+1
	document.write(i+"<br/>");	// br es salto de línea
}
