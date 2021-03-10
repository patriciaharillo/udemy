"use strict"

/*
Mostrar todos los números divisores de un número introducido en un prompt
*/

var numero = parseInt(prompt("Introduce un número", 0));
var mensaje = "Estos son todos los divisores: \n";

for(var i = 1; i <= numero; i++){
	if(numero%i == 0){
		console.log(i);
		mensaje = mensaje + i + "\n";
	}
}

alert(mensaje)