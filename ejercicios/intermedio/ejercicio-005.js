// ejercicio-005.js
// Suma de números primos: Suma todos los números primos menores que un número N.

let N = 20;
console.log(`Suma de los números primos del 1 al ${N}:`);
let suma = 0;

for (let i = 2; i < N; i++) {
    let esPrimo = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        console.log(i);
        suma += i;
    }
}
console.log(`La suma de los primos es ${suma}`);
