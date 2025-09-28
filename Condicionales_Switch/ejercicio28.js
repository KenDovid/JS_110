const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 28: Calculadora de Salario

let horas = Number(prompt("Ingrese las horas trabajadas: "));
let tipo = Number(prompt("Ingrese el tipo de empleado (1 = normal, 2 = extra): "));
let salario = 0;

switch (tipo) {
    case 1:
        salario = horas * 10;
        console.log("Salario: $" + salario);
        break;
    case 2:
        salario = horas * 15;
        console.log("Salario: $" + salario);
        break;
    default:
        console.log("Tipo de empleado no válido");
}
