// ejercicio-006.js
// Invertir número: Pide un número y devuélvelo invertido (ej: 123 → 321).

let numero = 123456789;
let invertido = numero.toString().split("").reverse().join("");

console.log(`Número original: ${numero}`);
console.log(`Número invertido: ${invertido}`);
