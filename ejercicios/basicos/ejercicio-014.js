// ejercicio-014.js
// Generar números impares: Muestra los primeros N números impares.

// let N = parseInt(prompt("¿Cuántos números impares deseas ver?"))
let N = 5;
let contador = 0;
let numero = 1;

while (contador < N) {
    console.log(numero);
    numero += 2;
    contador++;
}
