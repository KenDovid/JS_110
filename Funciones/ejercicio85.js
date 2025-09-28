const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 85: Formateador de Fechas

function formatearFecha(dia, mes, anio) {
    return dia + "/" + mes + "/" + anio;
}

let dia = prompt("Ingrese el día: ");
let mes = prompt("Ingrese el mes: ");
let anio = prompt("Ingrese el año: ");

console.log("Fecha formateada: " + formatearFecha(dia, mes, anio));
