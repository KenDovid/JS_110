const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 15: Secuencia de Fibonacci

let n = Number(prompt("¿Cuántos números de Fibonacci quieres?: "));
let a = 0;
let b = 1;

console.log(a);
if (n > 1) {
  console.log(b);
}

for (let i = 3; i <= n; i++) {
  let siguiente = a + b;
  console.log(siguiente);
  a = b;
  b = siguiente;
}
