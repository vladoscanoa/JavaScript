// ejercicio-001.js
// Calculadora simple: Usando switch, crea una calculadora que sume, reste, multiplique o divida dos números.

let seguir = true;

while (seguir) {
  let operacion = parseInt(prompt(
    "Elige una operación: (1) Suma, (2) Resta, (3) Multiplicar, (4) Dividir"
  ));

  let repetir = true;

  while (repetir) {
    let num1 = parseFloat(prompt("Ingrese primer numero"));
    let num2 = parseFloat(prompt("Ingrese segundo numero"));
    let resultado;

    switch (operacion) {
      case 1:
        resultado = num1 + num2;
        break;
      case 2:
        resultado = num1 - num2;
        break;
      case 3:
        resultado = num1 * num2;
        break;
      case 4:
        if (num2 === 0) {
            resultado = "Operacion no valida";
            console.log("Error division por cero");
        } else {
            resultado = num1 / num2;
        }
        break;
      default:
        resultado = "Operacion no valida";
    }
    alert("Resultado: " + resultado);
    repetir = confirm("¿Quieres hacer otra operacion?");
  }
  seguir = confirm("¿Quieres cambiar de operacion?");
}
