const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 84: Validación de Email

function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

let correo = prompt("Ingrese un correo electrónico: ");
console.log("¿Es válido? " + validarEmail(correo));
