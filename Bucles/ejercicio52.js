const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 52: Multiplicación de Matrices

let matrizA = [
    [1, 2],
    [3, 4]
];

let matrizB = [
    [5, 6],
    [7, 8]
];

let resultado = [];

for (let i = 0; i < matrizA.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matrizB[0].length; j++) {
        let suma = 0;
        for (let k = 0; k < matrizB.length; k++) {
            suma = suma + (matrizA[i][k] * matrizB[k][j]);
        }
        resultado[i][j] = suma;
    }
}

console.log("El resultado de la multiplicación es: ");
console.log(resultado);
