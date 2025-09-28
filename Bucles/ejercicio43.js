const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 43: Factorial con For

let n = Number(prompt("Ingrese un número: "));
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

console.log("El factorial de " + n + " es: " + factorial);
