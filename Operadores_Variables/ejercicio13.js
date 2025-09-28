const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 13: Suma de Dígitos

let numero = prompt("Ingrese un número: "); 
let suma = 0;

for (let i = 0; i < numero.length; i++) {
    suma += Number(numero[i]); 
}

console.log(`La suma de los dígitos es: ${suma}`);
