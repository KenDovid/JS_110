const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 33: Conversor de Tiempo

let opcion = prompt("Convertir desde: (segundos, minutos, horas): ");
let cantidad = Number(prompt("Ingrese la cantidad: "));

switch (opcion) {
    case "segundos":
        console.log(cantidad + " segundos son " + (cantidad / 60) + " minutos.");
        console.log(cantidad + " segundos son " + (cantidad / 3600) + " horas.");
        break;
    case "minutos":
        console.log(cantidad + " minutos son " + (cantidad * 60) + " segundos.");
        console.log(cantidad + " minutos son " + (cantidad / 60) + " horas.");
        break;
    case "horas":
        console.log(cantidad + " horas son " + (cantidad * 60) + " minutos.");
        console.log(cantidad + " horas son " + (cantidad * 3600) + " segundos.");
        break;
    default:
        console.log("Opción no válida.");
}
