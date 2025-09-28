// Ejercicio 90: Manipulador de Strings

function manipularString(texto) {
    return {
        mayusculas: texto.toUpperCase(),
        minusculas: texto.toLowerCase(),
        longitud: texto.length,
        invertido: texto.split("").reverse().join("")
    };
}

console.log(manipularString("Hola Mundo"));
