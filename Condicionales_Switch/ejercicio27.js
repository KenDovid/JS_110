const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 27: Menú de Restaurante

console.log("Menú:");
console.log("1. Pizza");
console.log("2. Hamburguesa");
console.log("3. Ensalada");

let opcionMenu = Number(prompt("Elija una opción (1-3): "));

switch (opcionMenu) {
    case 1:
        console.log("Ha elegido Pizza 🍕");
        break;
    case 2:
        console.log("Ha elegido Hamburguesa 🍔");
        break;
    case 3:
        console.log("Ha elegido Ensalada 🥗");
        break;
    default:
        console.log("Opción no válida");
}
