// Ejercicio 91: Calculadora Estadística

function calcularEstadisticas(arr) {
    // Media
    let media = arr.reduce((a, b) => a + b, 0) / arr.length;

    // Mediana
    let ordenado = [...arr].sort((a, b) => a - b);
    let mitad = Math.floor(ordenado.length / 2);
    let mediana = ordenado.length % 2 === 0 ?
        (ordenado[mitad - 1] + ordenado[mitad]) / 2 :
        ordenado[mitad];

    // Moda
    let frecuencia = {};
    arr.forEach(num => frecuencia[num] = (frecuencia[num] || 0) + 1);
    let maxFrecuencia = Math.max(...Object.values(frecuencia));
    let moda = Object.keys(frecuencia).filter(num => frecuencia[num] === maxFrecuencia);

    return { media, mediana, moda };
}

console.log(calcularEstadisticas([1, 2, 2, 3, 4, 4, 4, 5]));
