// Ejercicio 96: Manipulador de Archivos (Simulación)

function crearArchivo(nombre, contenido) {
    return { nombre, contenido };
}

function leerArchivo(archivo) {
    return archivo.contenido;
}

function editarArchivo(archivo, nuevoContenido) {
    archivo.contenido = nuevoContenido;
}

function eliminarArchivo(archivos, nombre) {
    return archivos.filter(a => a.nombre !== nombre);
}

// Uso simulado
let archivos = [];
let archivo1 = crearArchivo("notas.txt", "Hola mundo");

archivos.push(archivo1);
console.log(leerArchivo(archivo1)); // Hola mundo

editarArchivo(archivo1, "Contenido actualizado");
console.log(leerArchivo(archivo1)); // Contenido actualizado

archivos = eliminarArchivo(archivos, "notas.txt");
console.log(archivos); // []
