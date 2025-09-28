const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 81: Función de Validación

function validarNumero(valor) {
    return !isNaN(valor);
}

function validarTexto(valor) {
    return typeof valor === "string" && valor.trim().length > 0;
}

let entrada1 = prompt("Ingrese un número: ");
console.log("¿Es número válido? " + validarNumero(entrada1));

let entrada2 = prompt("Ingrese un texto: ");
console.log("¿Es texto válido? " + validarTexto(entrada2));
