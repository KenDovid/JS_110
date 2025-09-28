const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 80: Camino en Matriz

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Un camino posible es: ");
let camino = "";

for (let i = 0; i < matriz.length; i++) {
    camino += matriz[i][i] + " ";  // diagonal como ejemplo simple
}

console.log(camino);
