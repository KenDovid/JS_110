const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 57: Palíndromo

let palabra = prompt("Ingrese una palabra: ");
let esPalindromo = true;

for (let i = 0; i < palabra.length / 2; i++) {
    if (palabra[i] !== palabra[palabra.length - 1 - i]) {
        esPalindromo = false;
        break;
    }
}

if (esPalindromo) {
    console.log("La palabra es un palíndromo.");
} else {
    console.log("La palabra no es un palíndromo.");
}
