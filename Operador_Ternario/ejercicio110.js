const prompt = require("prompt-sync")({ sigint: true });
// Ejercicio 110: Estado de Agua

let temp = Number(prompt("Ingrese la temperatura en °C: "));
let estado = (temp <= 0) ? "Sólido" :
             (temp >= 100) ? "Gaseoso" : "Líquido";

console.log("El estado del agua es: " + estado);
