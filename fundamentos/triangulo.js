/**
 * @param {number} altura
 */
function trianguloIzquierda(altura) {
  for (let i = 0; i < altura; i++) {
    console.log("*".repeat(i + 1));
  }
}

trianguloIzquierda(4);

/**
 * @param {number} altura
 */
function triaguloDerecha(altura) {
  for (let i = 0; i < altura; i++) {
    const asteriscos = "*".repeat(i + 1);
    console.log(asteriscos.padStart(altura, " "));
  }
}

triaguloDerecha(4);

function arbol(altura) {
  for (let i = 0; i < altura; i++) {
    const asteriscos = "*".repeat(i + 1);
    let fila = "";
    for (let k = 0; k < altura - asteriscos.length; k++) {
      fila += " ";
    }
    console.log(fila + asteriscos);
  }
}

arbol(4);
