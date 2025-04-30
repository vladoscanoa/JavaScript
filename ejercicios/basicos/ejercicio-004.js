// ejercicio-004.js
// Verificar par o impar: Pide un número y determina si es par o impar.

let numero = parseInt(prompt("Ingrese un numero"));
if (numero % 2 === 0) {
    console.log("Es par");
} else {
    console.log("Es impar");
}

// Llevando operador ternario
const esParImpar = numero % 2 === 0 ? "Es par" : "Es impar";
console.log(esParImpar);
