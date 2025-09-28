const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 9: Número Positivo / Negativo

let numero = Number(prompt("Ingrese el número a validar: "));

if (numero > 0){
    console.log("El número ingresado es positivo.")
} else if( numero < 0){
    console.log("El número ingresado es negativo.")
} else{
    console.log("El número ingresado es 0.")
}