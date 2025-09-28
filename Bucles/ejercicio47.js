const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 47: Serie Numérica

let n = Number(prompt("Ingrese hasta qué número desea ver la serie: "));

for (let i = 2; i <= n; i = i + 2) {
    console.log(i);
}
