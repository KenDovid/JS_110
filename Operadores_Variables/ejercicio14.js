const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 14: Número primo

let numero = Number(prompt("Ingrese un número: "));
let contador = 0;

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    contador++;
  }
}

if (contador === 2) {
  console.log("El número es primo");
} else {
  console.log("El número no es primo");
}
