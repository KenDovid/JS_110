const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 19: Conversor de Moneda

let cantidad = Number(prompt("Ingrese la cantidad: "));
let tasa = Number(prompt("Ingrese la tasa de conversión: "));

let resultado = cantidad * tasa;

console.log("El valor convertido es: " + resultado);