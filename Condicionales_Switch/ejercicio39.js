const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 39: Conversor de Bases

let numero = prompt("Ingrese un número en base decimal: ");
let opcion = prompt("Convertir a (binario / hexadecimal): ");
let resultado;

switch (opcion) {
    case "binario":
        resultado = Number(numero).toString(2);
        break;
    case "hexadecimal":
        resultado = Number(numero).toString(16);
        break;
    default:
        resultado = "Opción no válida.";
}

console.log("El resultado de la conversión es: " + resultado);
