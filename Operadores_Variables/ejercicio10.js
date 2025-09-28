const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 10: Año bisiesto

let anio = Number(prompt("Ingrese el año a validar: "))

if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
    console.log(`${anio} es bisiesto.`);
} else {
    console.log(`${anio} no es bisiesto.`);
}