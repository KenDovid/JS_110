// Ejercicio 97: Calculadora Científica

function calculadoraCientifica(op, num1, num2) {
    switch (op) {
        case "sin": return Math.sin(num1);
        case "cos": return Math.cos(num1);
        case "tan": return Math.tan(num1);
        case "log": return Math.log(num1);
        case "pow": return Math.pow(num1, num2);
        case "sqrt": return Math.sqrt(num1);
        default: return "Operación no válida";
    }
}

console.log(calculadoraCientifica("sin", Math.PI / 2)); // 1
console.log(calculadoraCientifica("pow", 2, 3)); // 8
console.log(calculadoraCientifica("sqrt", 25)); // 5
