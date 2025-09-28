const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 15: Factorial

let numero = Number(prompt("Ingrese un número: "));
let factorial = 1;

for (let i = 1; i <= numero; i++) {
  factorial = factorial * i;
}

console.log("El factorial es: " + factorial);
