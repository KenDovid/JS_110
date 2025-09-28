const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 6: Calculadora IMC: 
let peso = Number(prompt("Ingrese su peso en KG por favor: "));
let altura = Number(prompt("Ingrese su altura en metros (Ej: 1.70): "));

let imc = peso / (altura * altura);

console.log("Tu indice de masa corporal es: " + imc.toFixed(2))