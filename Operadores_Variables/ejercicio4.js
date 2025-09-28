const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 4: Calculadora de edad:

// Solicitar el año de nacimiento
let anio = Number(prompt("Ingresa el año de tu nacimiento: "));
// Función que brinda el año actual:
let anioActual = new Date().getFullYear();

if (isNaN(anio) || anio > anioActual) {
    console.log("Error: Ingrese un año válido.");
} else {
    console.log(`Tienes: ${anioActual - anio} años.`);
}