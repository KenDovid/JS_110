const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 7: Validación de contraseña

let contrasena = prompt("Ingrese la contraseña a validar: ")

if (contrasena.length > 10){
    console.log(`Su clave tiene ${contrasena.length} carácteres, es segura.`);

} else {
    console.log(`Su clave tiene ${contrasena.length} carácteres, se recomienda cambiarla`)
}