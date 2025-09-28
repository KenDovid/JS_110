// Ejercicio 92: Conversor de Bases con Funciones

function convertirBase(numero, base) {
    return numero.toString(base);
}

console.log("Decimal 15 a binario:", convertirBase(15, 2));  // 1111
console.log("Decimal 15 a octal:", convertirBase(15, 8));    // 17
console.log("Decimal 15 a hexadecimal:", convertirBase(15, 16)); // F
