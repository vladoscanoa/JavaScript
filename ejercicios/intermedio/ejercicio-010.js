// ejercicio-010.js
// Sumar todos los dígitos de un número: Ej: 123 → 1 + 2 + 3 = 6.

let numero = 123;
let suma = 0;
let numeroComoCadena = numero.toString(); // Convertir el número a string para poder iterar

for (let i = 0; i < numeroComoCadena.length; i++) {
    suma += parseInt(numeroComoCadena[i]); // Convertir cada carácter a número y sumar
}

console.log(`La suma de los dígitos de ${numero} es: ${suma}`);


let numero2 = 123;
let suma2 = 0;
let temp = numero2;

while (temp > 0) {
    suma2 += temp % 10; // Obtener el último dígito
    temp = Math.floor(temp / 10); // Eliminar el último dígito
}

console.log(`La suma de los dígitos de ${numero2} es: ${suma2}`);