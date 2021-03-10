"use strict"

/*
Mostrar todos los números impares que hay entre dos números introducidos
por el usuario
*/

var numero1 = parseInt(prompt("Introduce un número", 0));
var numero2 = parseInt(prompt("Introduce otro número", 0));

document.write("<h1>Estos son los números impares que hay entre "+ numero1 + " y " + numero2 + ":</h1>");
if(numero1%2 == 0){
	numero1 = numero1 + 1;
}
for( var i = numero1; i <= numero2; i=i+2){
	document.write(i+"</br>");
}