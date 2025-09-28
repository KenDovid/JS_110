const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 24: Calculadora de Figuras

console.log("1. Círculo");
console.log("2. Cuadrado");
console.log("3. Triángulo");

let opcion = Number(prompt("Elija una figura: "));

switch (opcion) {
  case 1:
    let radio = Number(prompt("Ingrese el radio: "));
    console.log("Área: " + (Math.PI * radio * radio));
    console.log("Perímetro: " + (2 * Math.PI * radio));
    break;

  case 2:
    let lado = Number(prompt("Ingrese el lado: "));
    console.log("Área: " + (lado * lado));
    console.log("Perímetro: " + (4 * lado));
    break;

  case 3:
    let base = Number(prompt("Ingrese la base: "));
    let altura = Number(prompt("Ingrese la altura: "));
    let lado1 = Number(prompt("Ingrese lado 1: "));
    let lado2 = Number(prompt("Ingrese lado 2: "));
    console.log("Área: " + (base * altura) / 2);
    console.log("Perímetro: " + (base + lado1 + lado2));
    break;

  default:
    console.log("Opción no válida");
}
