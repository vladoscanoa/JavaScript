// ejercicio-003.js
// Serie Fibonacci: Muestra los primeros N números de la serie Fibonacci (0, 1, 1, 2, 3, 5...).

let N = 1; // Cambia este valor para mostrar más o menos números
let a = 0,
    b = 1;

console.log("Serie Fibonacci:");
for (let i = 0; i < N; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}
