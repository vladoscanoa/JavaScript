// ejercicio-008.js
// Generar un número aleatorio en un rango: Pide un mínimo y máximo, y genera un número aleatorio en ese rango.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Introduce el número mínimo: ", (minInput) => {
    rl.question("Introduce el número máximo: ", (maxInput) => {
        const min = parseInt(minInput);
        const max = parseInt(maxInput);

        if (isNaN(min) || isNaN(max) || min > max) {
            console.log(
                "Por favor, introduce valores válidos (mínimo debe ser menor o igual al máximo)."
            );
        } else {
            const numeroAleatorio =
                Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(
                `Número aleatorio entre ${min} y ${max}: ${numeroAleatorio}`
            );
        }

        rl.close();
    });
});
