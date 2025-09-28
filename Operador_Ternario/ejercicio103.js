const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 103: Signo de Número

let numero = Number(prompt("Ingrese un número: "));
let signo = (numero > 0) ? "Positivo" : (numero < 0) ? "Negativo" : "Cero";
console.log("El número es: " + signo);
