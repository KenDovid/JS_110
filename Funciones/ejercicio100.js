// Ejercicio 100: Sistema de Autenticación

function login(usuario, contraseña) {
    let usuarios = {
        "amigo": "1234",
        "admin": "admin123",
        "invitado": "guest"
    };

    if (usuarios[usuario] && usuarios[usuario] === contraseña) {
        return "✅ Acceso concedido. Bienvenido " + usuario;
    } else {
        return "❌ Usuario o contraseña incorrectos.";
    }
}

console.log(login("amigo", "1234"));     // Correcto
console.log(login("admin", "wrong"));    // Incorrecto
