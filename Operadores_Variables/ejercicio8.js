const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 8: Calculadora de Propina

let cuenta = Number(prompt("Ingrese el valor de la cuenta: "))

let prop10 = cuenta * 0.10;
let prop15 = cuenta * 0.15;
let prop20 = cuenta * 0.20;

let total10 = cuenta + prop10;
let total15 = cuenta + prop15;
let total20 = cuenta + prop20;

console.log(`La cuenta con propina del 10% es de ${total10} pesos.`)
console.log(`La cuenta con propina del 15% es de ${total15} pesos.`)
console.log(`La cuenta con propina del 20% es de ${total20} pesos.`)