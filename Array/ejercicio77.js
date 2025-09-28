const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 77: Matriz Identidad

let n = Number(prompt("Ingrese el tamaño de la matriz identidad: "));
let matriz = [];

for (let i = 0; i < n; i++) {
    matriz[i] = [];
    for (let j = 0; j < n; j++) {
        if (i === j) {
            matriz[i][j] = 1;
        } else {
            matriz[i][j] = 0;
        }
    }
}

console.log("Matriz identidad:");
console.log(matriz);
