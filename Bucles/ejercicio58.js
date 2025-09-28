const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 58: Inversor de Número

let numero = parseInt(prompt("Ingrese un número: "));
let invertido = 0;

while (numero > 0) {
    let digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
}

console.log("Número invertido: " + invertido);
