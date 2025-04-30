// ejercicio-002.js
// Contador de dígitos: Pide un número y cuenta cuántos dígitos tiene (ej: 100 → 3 dígitos).

// toString combierte un valor en una cadena de texto.
let numero = 1233100;
let cantidadDigitos = numero.toString().length;

console.log(`${numero} tiene ${cantidadDigitos} dígitos.`);
