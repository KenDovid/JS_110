const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 62: Elementos Únicos

let array = [1, 2, 2, 3, 4, 4, 5];
let unicos = [];

for (let i = 0; i < array.length; i++) {
    let contador = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
            contador++;
        }
    }
    if (contador === 1) {
        unicos.push(array[i]);
    }
}

console.log("Elementos únicos: " + unicos);
