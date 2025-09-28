const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 68: Buscar y Reemplazar

let array = [1, 2, 3, 4, 5];
let buscar = 3;
let reemplazar = 99;

for (let i = 0; i < array.length; i++) {
    if (array[i] === buscar) {
        array[i] = reemplazar;
    }
}

console.log("Array modificado: " + array);
