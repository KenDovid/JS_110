const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 66: Matriz Transpuesta

let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

let filas = matriz.length;
let columnas = matriz[0].length;
let transpuesta = [];

for (let i = 0; i < columnas; i++) {
    transpuesta[i] = [];
    for (let j = 0; j < filas; j++) {
        transpuesta[i][j] = matriz[j][i];
    }
}

console.log("Matriz original: ");
console.log(matriz);
console.log("Matriz transpuesta: ");
console.log(transpuesta);
