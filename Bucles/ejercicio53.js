const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 53: Búsqueda en Array

let numeros = [10, 20, 30, 40, 50];
let buscado = Number(prompt("Ingrese el número a buscar: "));
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === buscado) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log("El número está en el array.");
} else {
    console.log("El número no está en el array.");
}
