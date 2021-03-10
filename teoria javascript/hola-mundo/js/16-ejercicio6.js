"use strict"

/*
Hacer un programa si un número es par o impar.
1. Tiene que tener la ventana prompt
2. Si no es válido, que nos pida de nuevo el número

*/

var numero;

do{
	numero = parseInt(prompt("Introduce un número", 0));
}while(isNaN(numero));

	if(numero % 2 == 0){
		alert("Tu número es par");
	}else{
		alert("Tu número es impar");
	}
