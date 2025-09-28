const prompt = require("prompt-sync")({ sigint: true});
// Ejercicio 73: Array de Objetos

let personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "María", edad: 20 }
];

for (let i = 0; i < personas.length - 1; i++) {
    for (let j = i + 1; j < personas.length; j++) {
        if (personas[i].edad > personas[j].edad) {
            let temp = personas[i];
            personas[i] = personas[j];
            personas[j] = temp;
        }
    }
}

console.log("Personas ordenadas por edad:");
console.log(personas);
