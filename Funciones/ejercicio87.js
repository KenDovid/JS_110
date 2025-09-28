const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 87: Contador de Palabras

function contarPalabras(texto) {
    let palabras = texto.trim().split(/\s+/);
    return palabras.length;
}

let frase = prompt("Ingrese una frase: ");
console.log("Cantidad de palabras: " + contarPalabras(frase));
