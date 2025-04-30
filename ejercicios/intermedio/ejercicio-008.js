// ejercicio-008.js
// Contar caracteres específicos: Pide una frase y un carácter, y cuenta cuántas veces aparece ese carácter.

let frase = prompt("Por favor, introduce una frase:");

// Pedir al usuario un carácter a buscar
let caracter = prompt("Introduce el carácter que deseas contar:");

// Validar que se haya introducido un solo carácter
if (caracter.length !== 1) {
    console.log("Por favor, introduce exactamente un carácter.");
} else {
    // Inicializar contador
    let contador = 0;
    
    // Recorrer la frase y contar las coincidencias
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === caracter) {
            contador++;
        }
    }
    
    // Mostrar el resultado
    console.log(`El carácter "${caracter}" aparece ${contador} veces en la frase: "${frase}"`);
}
