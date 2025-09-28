const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 106: Nota a Letra

let nota = Number(prompt("Ingrese la nota (0-100): "));
let letra = (nota >= 90) ? "A" :
            (nota >= 80) ? "B" :
            (nota >= 70) ? "C" :
            (nota >= 60) ? "D" : "F";

console.log("La nota en letra es: " + letra);
