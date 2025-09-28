const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 44: Números Pares

let n = Number(prompt("¿Cuántos números pares desea ver?: "));

for (let i = 1; i <= n; i++) {
    console.log(i * 2);
}
