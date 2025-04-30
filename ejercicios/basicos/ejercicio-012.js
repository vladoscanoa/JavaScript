// ejercicio-012.js
// Verificar palíndromo: Pide una palabra y determina si es palíndromo (ej: "reconocer").

let palabra = "reconocer";
let invertida = palabra.split('').reverse().join('');

if (palabra === invertida) {
    console.log(`${palabra} es un palíndromo.`);
} else {
    console.log(`${palabra} no es un palíndromo.`);
}
