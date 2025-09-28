const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 72: Pares que Suman

let array = [2, 4, 3, 7, 5];
let objetivo = 9;

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === objetivo) {
            console.log("Par encontrado: " + array[i] + " + " + array[j]);
        }
    }
}
