const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 78: Simetría de Matriz

let matriz = [
    [1, 2, 3],
    [2, 5, 6],
    [3, 6, 9]
];

let simetrica = true;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        if (matriz[i][j] !== matriz[j][i]) {
            simetrica = false;
        }
    }
}

if (simetrica) {
    console.log("La matriz es simétrica.");
} else {
    console.log("La matriz NO es simétrica.");
}
