"use strict"

// WHILE

var year = 2000; // Inicialización de variable

while(year <= 2025){	// Condición de parada
	// ejecuta esto
	console.log("Estamos en el año "+year);

	if(year == 2020){
		break;	// Corta la ejecución del bucle
	}

	year++;	// Iterador
}

// Do while

var year = 30;

do{
	alert("Quedan "+(year - 25) + " alertas");
	year--;
}while(year > 25);