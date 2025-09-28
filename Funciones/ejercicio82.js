const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 82: Calculadora con Funciones

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: división por 0";
    }
    return a / b;
}

let num1 = Number(prompt("Ingrese el primer número: "));
let num2 = Number(prompt("Ingrese el segundo número: "));
let operacion = prompt("Ingrese la operación (+, -, *, /): ");

let resultado;

switch (operacion) {
    case "+":
        resultado = sumar(num1, num2);
        break;
    case "-":
        resultado = restar(num1, num2);
        break;
    case "*":
        resultado = multiplicar(num1, num2);
        break;
    case "/":
        resultado = dividir(num1, num2);
        break;
    default:
        resultado = "Operación no válida";
}

console.log("Resultado: " + resultado);
