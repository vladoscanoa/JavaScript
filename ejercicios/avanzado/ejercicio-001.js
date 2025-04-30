// ejercicio-001.js
// Adivinar el número: Genera un número aleatorio entre 1 y 100 y pide al usuario que lo adivine (usa Math.random()).

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;

console.log("He pensado un número entre 1 y 100. ¿Puedes adivinarlo?");

while (!adivinado) {
    const numeroUsuario = parseInt(prompt("Ingresa un número entre 1 y 100"));
    intentos++;

    // if (¿no es un numero? || ¿menor que 1? || ¿mayor que 100?
    //  F sera si todos son Falsos
    // V sera si al menos hay un Falso
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        console.log("Ingrese un numero valido entre 1 y 100");
        continue;
    }

    // Comparar con el número aleatorio
    if (numeroUsuario === numeroAleatorio) {
        adivinado = true;
        console.log(
            `¡Felicidades! ¡Adivinaste el número en ${intentos} intentos!`
        );
    } else if (numeroUsuario < numeroAleatorio) {
        console.log("El número es mayor. ¡Intenta de nuevo!");
    } else {
        console.log("El número es menor. ¡Intenta de nuevo!");
    }
}
