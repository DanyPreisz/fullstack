function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej:
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]
  var arrayResultante = [];
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      arrayResultante.push(array[i]);
    }
  }
  return arrayResultante;
}
console.log(soloNumeros([1, "Henry", 32])); // Output: [1, 2]
