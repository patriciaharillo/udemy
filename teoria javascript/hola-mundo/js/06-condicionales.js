"use strict"

//Condicional if
// Si A es igual a B entonces haz algo

var edad = 19;
var nombre = "David Suarez";

/*
// Operadores relacionales
	Mayor: >
	Menor: <
	Mayor o igual: >=
	Mneor o igual: <=
	Igual: ==
	Diferente: !=
*/

if(edad >= 18){
	console.log(nombre+" tiene " +edad+ " años, es mayor de edad ")

	if(edad <= 33){
		console.log("Todavía eres millenial");
	}else if (edad >= 70){
		console.log("Eres anciano")
	}else{
		console.log("Ya no eres millenial")
	}
}else{
		console.log(nombre+" tiene " +edad+ " años, es menor de edad ")
}

/*
// Operadores lógicos
AND(Y): &&
OR(O): ||
NEGACIÓN: !
*/

var year = 2028;

// Negación

if(year != 2016){
	console.log("El año no es 2016, realmente es "+year);
}

// AND
if (year >=2000 && year <= 2020){
	console.log("Estamos en la era actual");
}else if(year < 2000 && year >= 1900){
	console.log("Estamos en la era de los 90s");
}else{
	console.log("No se en qué época estamos");
}

// OR
if(year == 2008 || (year >= 2018 && year == 2028)){
	console.log("El año acaba en 8");
}else{
	console.log("Año no registrado");
}

