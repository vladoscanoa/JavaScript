// ejercicio-009.js
// Contador de vocales en una palabra: Pide una palabra y cuenta cuántas vocales tiene (solo letras minúsculas).

const cadena = "hola mundo";
let contadorVocales = 0;

for (const letra of cadena) {
    if ("aeiou".includes(letra)) {
        contadorVocales++;
    }
}

console.log(`La palabra "${cadena}" tiene ${contadorVocales} vocales.`);

