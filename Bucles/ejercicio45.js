const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 45: Números Primos

let n = Number(prompt("¿Cuántos números primos desea ver?: "));
let contador = 0;
let numero = 2;

while (contador < n) {
    let esPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(numero);
        contador++;
    }
    numero++;
}
