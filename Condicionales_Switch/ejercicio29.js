const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 29: Sistema de Descuentos

let categoria = Number(prompt("Ingrese la categoría de cliente (1, 2 o 3): "));
let precio = Number(prompt("Ingrese el precio del producto: "));
let descuento = 0;

switch (categoria) {
    case 1:
        descuento = 0.1;
        break;
    case 2:
        descuento = 0.2;
        break;
    case 3:
        descuento = 0.3;
        break;
    default:
        console.log("Categoría inválida");
}

let total = precio - (precio * descuento);
console.log("Total a pagar: $" + total);
