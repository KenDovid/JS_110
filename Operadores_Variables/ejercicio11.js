const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 11: Calculadora de Descuento

let producto = Number(prompt("Ingrese el precio del producto: "));
let descuento = Number(prompt("Ingrese el descuento deseado: "));

let precioFinal = producto * (1 - descuento / 100);

console.log(`El precio final es de ${precioFinal}`)
