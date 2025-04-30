// ejercicio-009.js
// Generar patrón de asteriscos: Muestra un patrón como este (para N=5):
/*
 *
 **
 ***
 ****
 *****
 */

let filas = 5;
for (let i = 1; i <= filas; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += "*";
    }
    console.log(linea);
}
