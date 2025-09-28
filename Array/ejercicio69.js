const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 69: Combinar Arrays

let array1 = [1, 3, 5];
let array2 = [2, 4, 6];
let combinado = [];

for (let i = 0; i < array1.length; i++) {
    combinado.push(array1[i]);
    combinado.push(array2[i]);
}

console.log("Array combinado: " + combinado);
