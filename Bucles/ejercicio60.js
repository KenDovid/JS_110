const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 60: Suma de Números Naturales

let n = parseInt(prompt("Ingrese hasta qué número sumar: "));
let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += i;
}

console.log("La suma de los primeros " + n + " números naturales es: " + suma);
