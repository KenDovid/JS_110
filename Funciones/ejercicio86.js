const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 86: Calculadora de Edad

function calcularEdad(anioNacimiento, anioActual) {
    return anioActual - anioNacimiento;
}

let nacimiento = Number(prompt("Ingrese su año de nacimiento: "));
let actual = Number(prompt("Ingrese el año actual: "));

console.log("Su edad es: " + calcularEdad(nacimiento, actual));
