// Ejercicio 94: Cifrado César

function cifradoCesar(texto, desplazamiento) {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        if (c.match(/[a-z]/)) {
            let codigo = (c.charCodeAt(0) - 97 + desplazamiento) % 26 + 97;
            resultado += String.fromCharCode(codigo);
        } else if (c.match(/[A-Z]/)) {
            let codigo = (c.charCodeAt(0) - 65 + desplazamiento) % 26 + 65;
            resultado += String.fromCharCode(codigo);
        } else {
            resultado += c; // Mantener espacios y símbolos
        }
    }

    return resultado;
}

console.log(cifradoCesar("Hola Mundo", 3));  // Krod Pxqgr
