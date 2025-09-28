const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 30: Juego de Piedra, Papel o Tijera

console.log("Opciones: \n1. Piedra \n2. Papel \n3. Tijera");
let jugador = Number(prompt("Elija su opción: "));
let maquina = Math.floor(Math.random() * 3) + 1;

console.log("La máquina eligió: " + maquina);

switch (true) {
    case (jugador === maquina):
        console.log("Empate");
        break;
    case (jugador === 1 && maquina === 3):
    case (jugador === 2 && maquina === 1):
    case (jugador === 3 && maquina === 2):
        console.log("¡Ganaste!");
        break;
    default:
        console.log("Perdiste.");
}
