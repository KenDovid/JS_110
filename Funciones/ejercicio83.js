const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 83: Generador de Contraseñas

function generarContrasena(longitud) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[indice];
    }
    return contrasena;
}

let longitud = Number(prompt("Ingrese la longitud de la contraseña: "));
console.log("Contraseña generada: " + generarContrasena(longitud));
