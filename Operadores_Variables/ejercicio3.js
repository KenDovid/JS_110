const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 3: Mayor de 3 números:

let numero1 = Number(prompt("Ingrese el primer número: "));
let numero2 = Number(prompt("Ingrese el segundo número: "));
let numero3 = Number(prompt("Ingrese el tercer número: "));

// Función para detectar automaticamente el número mayor: 

let mayor = Math.max(numero1, numero2, numero3);
console.log("El número mayor es: " + mayor);
