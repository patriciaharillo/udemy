"use strict"

/*
Bucle for
for (inicializar variable, condición de parada, iterador)
Bucle es una estructura de control que se repite varias veces
*/

var numeros = 100;

for(var i = 0; i < numeros; i=i+3){
	console.log("Vamos por el número " +i);
}
for(var i = 0; i < numeros; i++){
	console.log("Vamos por el número " +i);
}
for(var i = 0; i < numeros; i=i*2){
	console.log("Vamos por el número " +i);
	if(i == 0){
		i = 1;
	}
}