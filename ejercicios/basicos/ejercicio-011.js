// ejercicio-011.js
// Tabla de multiplicar: Muestra la tabla de multiplicar de un número del 1 al 10.

let numero = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

// Ver todas las tablas de multplicar
for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(""); // Línea en blanco para separar las tablas
}
