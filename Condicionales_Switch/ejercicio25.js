const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 25: Conversor de Unidades

console.log("1. Metros a Centímetros");
console.log("2. Kilómetros a Metros");
console.log("3. Horas a Minutos");

let opcion = Number(prompt("Elija una conversión: "));
let cantidad = Number(prompt("Ingrese la cantidad: "));

switch (opcion) {
  case 1:
    console.log(cantidad + " metros = " + (cantidad * 100) + " cm");
    break;
  case 2:
    console.log(cantidad + " km = " + (cantidad * 1000) + " m");
    break;
  case 3:
    console.log(cantidad + " horas = " + (cantidad * 60) + " min");
    break;
  default:
    console.log("Opción no válida");
}
