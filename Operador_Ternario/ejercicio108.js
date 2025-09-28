const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 108: Descuento por Edad

let edad = Number(prompt("Ingrese su edad: "));
let descuento = (edad < 18) ? 0.2 :
                (edad >= 60) ? 0.3 : 0;

console.log("El descuento aplicado es: " + (descuento * 100) + "%");
