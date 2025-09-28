const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 21: Calculadora con Switch

let numero1 = Number(prompt("Ingrese el primer número: "));
let numero2 = Number(prompt("Ingrese el segundo número: "));
let operador = prompt("Ingrese la operación (+, -, *, /): ");

switch (operador) {
  case "+":
    console.log("Resultado: " + (numero1 + numero2));
    break;
  case "-":
    console.log("Resultado: " + (numero1 - numero2));
    break;
  case "*":
    console.log("Resultado: " + (numero1 * numero2));
    break;
  case "/":
    if (numero2 === 0) {
      console.log("Error: división entre 0");
    } else {
      console.log("Resultado: " + (numero1 / numero2));
    }
    break;
  default:
    console.log("Operador no válido");
}
