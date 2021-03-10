"use strict"

//Switch

var edad = 23;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Acabas de cumplir la mayoría de edad";
		break;
	case 23:
		imprime = "Edad de luis";
		break;
	case 25:
		imprime = "Casi la edad de Patri";
		break;
	default: 
		imprime = "Mensaje por defecto";
		break;
}
console.log(imprime);