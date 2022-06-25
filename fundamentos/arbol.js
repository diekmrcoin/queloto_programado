function arbol(altura) {
  for (let i = 0; i < altura; i++) {
    const asteriscos = "*".repeat(i + 1);
    let fila = "";
    for (let k = 0; k < altura - asteriscos.length; k++) {
      fila += " ";
    }
    console.log(fila + asteriscos + '*'.repeat(i));
  }
}

arbol(4);
