const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 37: Calculadora de Calorías

let actividad = prompt("Ingrese la actividad (correr, nadar, bicicleta): ");
let tiempo = Number(prompt("Ingrese el tiempo en minutos: "));
let calorias;

switch (actividad) {
    case "correr":
        calorias = tiempo * 10;
        break;
    case "nadar":
        calorias = tiempo * 8;
        break;
    case "bicicleta":
        calorias = tiempo * 6;
        break;
    default:
        console.log("Actividad no válida.");
        calorias = null;
}

console.log("Las calorías quemadas son: " + calorias);
