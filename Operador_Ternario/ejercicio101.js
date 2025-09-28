const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 101: Máximo de Dos Números

let num1 = Number(prompt("Ingrese el primer número: "));
let num2 = Number(prompt("Ingrese el segundo número: "));

let max = num1 > num2 ? num1 : num2;
console.log("El número mayor es: " + max);
