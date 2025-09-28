const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 63: Rotación de Array

let array = [1, 2, 3, 4, 5];
let k = 2; // número de posiciones a rotar

for (let i = 0; i < k; i++) {
    let ultimo = array[array.length - 1];
    for (let j = array.length - 1; j > 0; j--) {
        array[j] = array[j - 1];
    }
    array[0] = ultimo;
}

console.log("Array rotado: " + array);
