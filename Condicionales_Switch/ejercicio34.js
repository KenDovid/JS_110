const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 34: Calculadora Científica Básica

let operacion = prompt("Ingrese la operación (raiz, potencia, log): ");
let numero = Number(prompt("Ingrese un número: "));
let resultado;

switch (operacion) {
    case "raiz":
        resultado = Math.sqrt(numero);
        break;
    case "potencia":
        let exponente = Number(prompt("Ingrese el exponente: "));
        resultado = Math.pow(numero, exponente);
        break;
    case "log":
        resultado = Math.log(numero);
        break;
    default:
        console.log("Operación no válida.");
        resultado = null;
}

console.log("Resultado: " + resultado);
