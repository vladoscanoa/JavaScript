// ejercicio-009.js
// Juego de Piedra, Papel o Tijera: El usuario elige una opción y la computadora otra (usa números aleatorios). Determina el ganador.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Opciones posibles
const opciones = ["piedra", "papel", "tijera"];

// Función para determinar el ganador
function determinarGanador(usuario, computadora) {
    if (usuario === computadora) {
        return "Empate";
    }

    if (
        (usuario === "piedra" && computadora === "tijera") ||
        (usuario === "papel" && computadora === "piedra") ||
        (usuario === "tijera" && computadora === "papel")
    ) {
        return "¡Ganaste!";
    }

    return "Perdiste";
}

rl.question("Elige: piedra, papel o tijera: ", (eleccionUsuario) => {
    const eleccion = eleccionUsuario.toLowerCase();

    if (!opciones.includes(eleccion)) {
        console.log("Opción no válida. Intenta con piedra, papel o tijera.");
        rl.close();
        return;
    }

    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
    console.log(`La computadora eligió: ${eleccionComputadora}`);

    const resultado = determinarGanador(eleccion, eleccionComputadora);
    console.log(resultado);

    rl.close();
});
