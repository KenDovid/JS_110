const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 105: Clasificación Edad

let edad = Number(prompt("Ingrese su edad: "));
let categoria = (edad < 13) ? "Niño" :
                (edad < 20) ? "Adolescente" :
                (edad < 60) ? "Adulto" : "Adulto Mayor";

console.log("La categoría de edad es: " + categoria);
