const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 1: Calculadora básica

let numero1 = Number(prompt("Ingrese el primer valor: "));
let numero2 = Number(prompt("Ingrese el segundo valor: "));
let operador = prompt("Ingrese el operador a efectuar (+ - * /): ");

if (operador == "+") {
    console.log("El resultado de la suma es: " + (numero1 + numero2))
}
else if (operador == "-") {
    console.log("El resultado de la resta es: " + (numero1 - numero2))
}
else if (operador == "*") {
    console.log("El resultado de la multiplicación es: " + (numero1 * numero2))
}
else if (operador == "/") {
    if (numero2 == 0)
        console.log("Error, división por 0 no válida!")
    else {
        console.log("El resultado de la división es: " + (numero1 / numero2))
    }
}
else{
    console.log("Operador no válido, intente nuevamente!")
}