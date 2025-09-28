const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 107: Día Laboral

let dia = prompt("Ingrese un día de la semana: ").toLowerCase();
let tipoDia = (dia === "sábado" || dia === "domingo") ? "Fin de semana" : "Laboral";
console.log("El día " + dia + " es: " + tipoDia);
