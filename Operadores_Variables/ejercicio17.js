const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 17: MCD y MCM

let a = Number(prompt("Ingrese el primer número: "));
let b = Number(prompt("Ingrese el segundo número: "));
let mcd = 1;

for (let i = 1; i <= a && i <= b; i++) {
  if (a % i === 0 && b % i === 0) {
    mcd = i;
  }
}

let mcm = (a * b) / mcd;

console.log("El MCD es: " + mcd);
console.log("El MCM es: " + mcm);
