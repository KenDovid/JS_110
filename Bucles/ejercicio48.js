const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 48: Contador de Vocales

let texto = prompt("Ingrese un texto: ");
let contador = 0;

for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        contador++;
    }
}

console.log("El texto tiene " + contador + " vocales.");
