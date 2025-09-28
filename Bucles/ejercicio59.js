const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 59: Tabla de Multiplicar

let num = parseInt(prompt("Ingrese un número: "));

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}
