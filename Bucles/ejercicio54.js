const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 54: Ordenamiento Burbuja

let numeros = [5, 3, 8, 4, 2];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

console.log("Array ordenado: " + numeros);
