// Ejercicio 95: Función de Búsqueda Binaria

function busquedaBinaria(array, objetivo) {
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (array[medio] === objetivo) {
            return medio; // Encontrado
        } else if (array[medio] < objetivo) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return -1; // No encontrado
}

console.log(busquedaBinaria([1, 3, 5, 7, 9, 11], 7)); // 3
console.log(busquedaBinaria([1, 3, 5, 7, 9, 11], 4)); // -1
