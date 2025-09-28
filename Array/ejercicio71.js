const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 71: Subarray Máximo

let array = [1, -2, 3, 5, -1, 2];
let maxSuma = array[0];

for (let i = 0; i < array.length; i++) {
    let suma = 0;
    for (let j = i; j < array.length; j++) {
        suma += array[j];
        if (suma > maxSuma) {
            maxSuma = suma;
        }
    }
}

console.log("La suma máxima de un subarray es: " + maxSuma);
