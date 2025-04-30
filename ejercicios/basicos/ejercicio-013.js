// ejercicio-013.js
// Sumar números pares: Pide un número N y suma todos los pares desde 1 hasta N.
let num = 10;
let suma = 0;
for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i);
        suma += i;
    }
}
console.log(`La suma de los pares es ${suma}`);
