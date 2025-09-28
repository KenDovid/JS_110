const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 41: Tabla de Multiplicar

let numero = Number(prompt("Ingrese el número para la tabla: "));

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
