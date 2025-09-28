const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 49: Inversor de Número

let numero = prompt("Ingrese un número: ");
let invertido = "";

for (let i = numero.length - 1; i >= 0; i--) {
    invertido = invertido + numero[i];
}

console.log("El número invertido es: " + invertido);
