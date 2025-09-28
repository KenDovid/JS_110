// Ejercicio 98: Generador de Reportes

function generarReporte(datos) {
    let total = datos.length;
    let suma = datos.reduce((a, b) => a + b, 0);
    let promedio = suma / total;

    return `
    ----- REPORTE -----
    Total de datos: ${total}
    Suma: ${suma}
    Promedio: ${promedio.toFixed(2)}
    -------------------
    `;
}

console.log(generarReporte([10, 20, 30, 40, 50]));
