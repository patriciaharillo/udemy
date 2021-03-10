"use strict"

/*
Programa que pida dos números y que te diga cuál es mayor, cuál es menor o si son iguales
PLUS: Si los números no son un número o son menores o iguales a 0, nos lo vuelva a pedir
*/
//Para convertir texto a número entero 
var error = false;
var numero1;
var numero2;
do{
	numero1 = parseInt(prompt("Primer número", 0));
	numero2 = parseInt(prompt("Segundo número", 0));
	error = false;

	if (numero1 > numero2){
	alert(numero1+" es mayor que "+numero2);
	}else if(numero1 < numero2){
	alert(numero1+" es menor que "+numero2);
	}else if(numero1 == numero2){
		alert("Los dos números son iguales");
	}else{
		alert("Error");
		error = true;
	}

}while(error);


/* OTRA FORMA DE HACERLO:

	var numero1 = parseInt(prompt("Primer número", 0));
	var numero2 = parseInt(prompt("Segundo número", 0));

	while(numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
		numero1 = parseInt(prompt("Primer número", 0));
		numero2 = parseInt(prompt("Segundo número", 0));
	}

	if (numero1 > numero2){
		alert(numero1+" es mayor que "+numero2);
	}else if(numero1 < numero2){
		alert(numero1+" es menor que "+numero2);
	}else if(numero1 == numero2){
		alert("Los dos números son iguales");
	}else{
		alert("Error");
	}


*/
