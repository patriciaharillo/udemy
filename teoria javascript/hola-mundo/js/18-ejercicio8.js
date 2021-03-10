"use strict"

/*
Calculadora:
- Pida dos números por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- En el cuerpo de la página, en una alerta y por la consola el resultado de 
sumar, restar, multiplicar y dividir esas dos cifras
*/

var numero1;
do{
	numero1 = parseInt(prompt("Introduce el primer número", 0));
}while(isNaN(numero1) || numero1 < 0);

var numero2;
do{
	numero2 = parseInt(prompt("Introduce el segundo número", 0));
}while(isNaN(numero2) || numero2 < 0);

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicar = numero1*numero2;
var division = numero1 / numero2;

document.write("<h2>La suma de "+numero1+ " y "+numero2+ " = "+ suma + "</h2>");
document.write("<h2>La resta de "+numero1+ " y "+numero2+ " = "+ resta + "</h2>");
document.write("<h2>La multiplicación de "+numero1+ " y "+numero2+ " = "+ multiplicar + "</h2>");
document.write("<h2>La división de "+numero1+ " y "+numero2+ " = "+ division + "</h2>");

alert("La suma de "+numero1+ " y "+numero2+ " = "+ suma);
alert("La resta de "+numero1+ " y "+numero2+ " = "+ resta);
alert("La multiplicación de "+numero1+ " y "+numero2+ " = "+ multiplicar);
alert("La división de "+numero1+ " y "+numero2+ " = "+ division);

console.log("La suma de "+numero1+ " y "+numero2+ " = "+ suma);
console.log("La resta de "+numero1+ " y "+numero2+ " = "+ resta);
console.log("La multiplicación de "+numero1+ " y "+numero2+ " = "+ multiplicar);
console.log("La división de "+numero1+ " y "+numero2+ " = "+ division);
