const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 46: Patrón de Asteriscos

let n = Number(prompt("Ingrese el número de filas: "));

for (let i = 1; i <= n; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila = fila + "*";
    }
    console.log(fila);
}
