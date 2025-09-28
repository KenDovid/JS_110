const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 50: Palíndromo

let palabra = prompt("Ingrese una palabra o número: ");
let invertida = "";

for (let i = palabra.length - 1; i >= 0; i--) {
    invertida = invertida + palabra[i];
}

if (palabra === invertida) {
    console.log("Es un palíndromo.");
} else {
    console.log("No es un palíndromo.");
}
