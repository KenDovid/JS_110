const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 70: Elementos Faltantes

let array = [1, 2, 4, 6];
let faltantes = [];

for (let i = 1; i <= 6; i++) {
    if (!array.includes(i)) {
        faltantes.push(i);
    }
}

console.log("Los números faltantes son: " + faltantes);
