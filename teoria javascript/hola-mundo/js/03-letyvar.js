"use strict"

//PRUEBAS CON LET Y VAR

//Prueba con var
var numero = 40;
console.log(numero); //valor 40

if(true){
		var numero = 50;
		console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Prueba con LET
var texto = "Curso JS Patricia"
console.log(texto); //valor "";

if(true){
	let texto = "Curso Laravel 5";
	console.log(texto); //valor Laravel 5
}
	
console.log(texto); //valor js
