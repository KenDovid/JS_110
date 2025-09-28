const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 104: Año Bisiesto Ternario

let anio = Number(prompt("Ingrese un año: "));
let bisiesto = (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) ? "Bisiesto" : "No bisiesto";
console.log("El año " + anio + " es: " + bisiesto);
