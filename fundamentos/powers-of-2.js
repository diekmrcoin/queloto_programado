function powersOfTwo(n){
  var result = [];
  for (let i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

console.log(powersOfTwo(7));

