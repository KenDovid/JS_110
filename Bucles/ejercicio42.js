const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 42: Suma de Números

let n = Number(prompt("Ingrese un número: "));
let suma = 0;

for (let i = 1; i <= n; i++) {
    suma = suma + i;
}

console.log("La suma de los primeros " + n + " números es: " + suma);
