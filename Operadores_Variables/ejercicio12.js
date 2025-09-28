const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 12: Contador de Dígitos

let numero = prompt("Ingrese el número: ");
console.log(`El número contiene ${numero.length} dígitos`)
