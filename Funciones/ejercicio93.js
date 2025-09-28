// Ejercicio 93: Validador de Tarjeta

function validarTarjeta(numero) {
    let digitos = numero.toString().split("").reverse().map(Number);

    let suma = digitos.map((d, i) => {
        if (i % 2 === 1) {
            d *= 2;
            if (d > 9) d -= 9;
        }
        return d;
    }).reduce((a, b) => a + b, 0);

    return suma % 10 === 0;
}

console.log(validarTarjeta("4532015112830366")); // true (VISA)
console.log(validarTarjeta("1234567812345670")); // false
