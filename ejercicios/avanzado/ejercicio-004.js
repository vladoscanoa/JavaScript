// ejercicio-004.js
// Encontrar MCD (Máximo Común Divisor): Pide dos números y calcula su MCD (usando el algoritmo de Euclides o fuerza bruta).

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para calcular el MCD usando el algoritmo de Euclides
function calcularMCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Solicita los dos números al usuario
rl.question('Introduce el primer número: ', (input1) => {
  rl.question('Introduce el segundo número: ', (input2) => {
    const num1 = parseInt(input1);
    const num2 = parseInt(input2);

    if (isNaN(num1) || isNaN(num2)) {
      console.log('Por favor, introduce números válidos.');
    } else {
      const mcd = calcularMCD(Math.abs(num1), Math.abs(num2));
      console.log(`El MCD de ${num1} y ${num2} es: ${mcd}`);
    }

    rl.close();
  });
});