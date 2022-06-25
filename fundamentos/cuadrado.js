/**

Recibe longitud como parámetro e imprime un cuadrado

***
***
***

 */

/**
 * @param {number} lado la longitud del lado del cuadrado
 */
function cuadrado(lado) {
  for (let i = 0; i < lado; i += 1) {
    console.log("*".repeat(lado));
  }
}

cuadrado(4);
