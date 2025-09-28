const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 109: Tipo de Triángulo

let a = Number(prompt("Ingrese lado a: "));
let b = Number(prompt("Ingrese lado b: "));
let c = Number(prompt("Ingrese lado c: "));

let tipoTriangulo = (a === b && b === c) ? "Equilátero" :
                    (a === b || a === c || b === c) ? "Isósceles" : "Escaleno";

console.log("El triángulo es: " + tipoTriangulo);
