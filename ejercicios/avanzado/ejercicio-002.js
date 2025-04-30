// ejercicio-002.js
// Validar contraseña: Pide una contraseña y verifica si tiene al menos 8 caracteres y una mayúscula.

let contraseña = prompt("Introduce tu contraseña:");

// Verificar longitud mínima de 8 caracteres
let longitudValida = contraseña.length >= 8;

// Verificar que contenga al menos una mayúscula
let contieneMayuscula = false;
for (let i = 0; i < contraseña.length; i++) {
    if (contraseña[i] === contraseña[i].toUpperCase() && contraseña[i] !== contraseña[i].toLowerCase()) {
        contieneMayuscula = true;
        break;
    }
}

// Mostrar resultado
if (longitudValida && contieneMayuscula) {
    console.log("✅ Contraseña válida");
} else {
    console.log("❌ Contraseña inválida");
    if (!longitudValida) {
        console.log("- La contraseña debe tener al menos 8 caracteres");
    }
    if (!contieneMayuscula) {
        console.log("- La contraseña debe contener al menos una mayúscula");
    }
}