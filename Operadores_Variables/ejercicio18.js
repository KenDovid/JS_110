const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 18: Calculadora de Velocidad

console.log("1. Calcular velocidad");
console.log("2. Calcular distancia");
console.log("3. Calcular tiempo");

let opcion = Number(prompt("Elija una opción: "));

if (opcion === 1) {
  let d = Number(prompt("Ingrese la distancia: "));
  let t = Number(prompt("Ingrese el tiempo: "));
  let v = d / t;
  console.log("La velocidad es: " + v);
} else if (opcion === 2) {
  let v = Number(prompt("Ingrese la velocidad: "));
  let t = Number(prompt("Ingrese el tiempo: "));
  let d = v * t;
  console.log("La distancia es: " + d);
} else if (opcion === 3) {
  let d = Number(prompt("Ingrese la distancia: "));
  let v = Number(prompt("Ingrese la velocidad: "));
  let t = d / v;
  console.log("El tiempo es: " + t);
} else {
  console.log("Opción no válida");
}