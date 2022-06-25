/**
 * 
 * @param {number[]} lista 
 * @param {number} num 
 * @returns 
 */
function multiplica(lista, num) {
  return lista.map((n) => n * num);
}

/**
 *
 * @param {number[]} lista
 * @param {number} num
 * @returns {number[]}
 */
function multiplica2(lista, num) {
  const result = [];
  for (let i = 0; i < lista.length; i++) {
    result.push(lista[i] * num);
  }
  return result;
}

console.log(multiplica([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
console.log(multiplica2([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
