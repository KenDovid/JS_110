const prompt = require("prompt-sync")({ sigint: true });

let capital = Number(prompt("Ingrese el capital: "));
let tasa = Number(prompt("Ingrese la tasa (%): "));
let tiempo = Number(prompt("Ingrese el tiempo (años): "));

let interes = (capital * tasa * tiempo) / 100;
let monto = capital + interes;

console.log("El interés es: " + interes);
console.log("El monto total es: " + monto);
