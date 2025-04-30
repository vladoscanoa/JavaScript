// ejercicio-004.js
// Número primo: Verifica si un número es primo (solo divisible entre 1 y sí mismo).

let N = 20; // Cambia este valor si quieres otro límite
console.log(`Números primos del 1 al ${N}:`);

for (let i = 2; i <= N; i++) {
    let esPrimo = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(i);
    }
}
