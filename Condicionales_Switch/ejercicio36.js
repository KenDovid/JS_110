const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 36: Clasificador de Triángulos

let lado1 = Number(prompt("Ingrese el primer lado: "));
let lado2 = Number(prompt("Ingrese el segundo lado: "));
let lado3 = Number(prompt("Ingrese el tercer lado: "));

let tipo;

if (lado1 === lado2 && lado2 === lado3) {
    tipo = "Equilátero";
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    tipo = "Isósceles";
} else {
    tipo = "Escaleno";
}

console.log("El triángulo es: " + tipo);
