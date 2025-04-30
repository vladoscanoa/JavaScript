// ejercicio-003.js
// Contar palabras en una frase: Pide una frase y cuenta cuántas palabras tiene (separadas por espacios).

// Importamos el módulo readline para leer desde la consola
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitamos la frase al usuario
rl.question('Escribe una frase: ', (frase) => {
  // Eliminamos espacios extra y dividimos la frase por espacios
  const palabras = frase.trim().split(/\s+/);
  
  // Contamos las palabras
  const cantidadPalabras = frase.trim() === '' ? 0 : palabras.length;

  console.log(`La frase contiene ${cantidadPalabras} palabra(s).`);
  
  rl.close();
});