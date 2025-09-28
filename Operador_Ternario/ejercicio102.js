const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 102: Par o Impar Ternario

let numero = Number(prompt("Ingrese un número: "));
let resultado = (numero % 2 === 0) ? "Par" : "Impar";
console.log("El número es: " + resultado);
