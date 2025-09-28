const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 64: Unión e Intersección

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

let union = [];
for (let i = 0; i < array1.length; i++) {
    if (union.indexOf(array1[i]) === -1) {
        union.push(array1[i]);
    }
}
for (let i = 0; i < array2.length; i++) {
    if (union.indexOf(array2[i]) === -1) {
        union.push(array2[i]);
    }
}

let interseccion = [];
for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j] && interseccion.indexOf(array1[i]) === -1) {
            interseccion.push(array1[i]);
        }
    }
}

console.log("Unión: " + union);
console.log("Intersección: " + interseccion);
