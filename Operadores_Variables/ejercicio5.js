const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 5: Conversor de temperatura:

let grados = prompt("Ingrese los grados que quiere convertir (°C o °F): ").toUpperCase();

if (grados == "C"){
    let celsius = parseFloat(prompt("Ingrese los °C para convertir a °F: "));
    let cConvertidos = (celsius * 9/5) + 32
    console.log("Los °C ingresados a °F son: " + cConvertidos)
} else if(grados == "F"){
    let farenheit = parseFloat(prompt("Ingrese los °F para convertir a °C: "));
    let fConvertidos = (farenheit - 32) * 5/9 
    console.log("Los °F ingresados a °C son: " + fConvertidos)
} else{
    console.log("Valor no reconocido, intente nuevamente.")
}