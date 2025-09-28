const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 2: Número par o impar:

let numero = Number(prompt("Número a calcular: "))

if (numero % 2 == 0){
    console.log("El número " + numero + " es par.")
} else {
    console.log("El número " + numero + " es impar.")
}