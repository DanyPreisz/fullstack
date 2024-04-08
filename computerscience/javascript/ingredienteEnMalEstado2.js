// El ingrediente de cierta comida está en mal estado. Hay que sacar los ingredientes próximos a éste,
// ya que deben estar contaminados también.
// La funcion recibe un objeto "menu" que contiene las comidas del día. "comida" es un array de ingredientes.
// Si "ingrediente" está en el array, devolver un array con el ingrediente y los elementos en un índice de
// diferencia.
// Ej:
/* let menuDelDia = {
      raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
      bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
      tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"]
  } */
// ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto") devuelve => ["Aceite", "Peceto", "Ricota"];
// ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite") devuelve => ["Pollo", "Aceite", "Huevos"];
// En caso de no encontrarse el ingrediente en la comida, devolver "El menú está perfecto".
// NOTA: No utilizar el método "includes".
//
function ingredienteEnMalEstado(menu, comida, ingrediente) {
  let resultado = [];
  let encontrada = false;

  for (let i = 0; i < menu[comida].length; i++) {
    if (menu[comida][i] === ingrediente) {
      encontrada = true;
      resultado.push(menu[comida][i - 1], menu[comida][i], menu[comida][i + 1]);
      break;
    }
  }

  if (!encontrada) {
    return "El menú está perfecto";
  }

  return resultado;
}

// Ejemplos de uso
let menuDelDia = {
  raviolesConSalsa: ["Harina", "Sal", "Huevos", "Aceite", "Peceto", "Ricota"],
  bagnaCauda: ["Ajo", "Anchoas", "Aceite", "Crema", "Papas", "Zanahorias"],
  tallarines: ["Harina", "Pollo", "Aceite", "Huevos", "Tomates", "Cebolla"],
};

console.log(ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "Peceto")); // ["Aceite", "Peceto", "Ricota"]
console.log(ingredienteEnMalEstado(menuDelDia, "tallarines", "Aceite")); // ["Pollo", "Aceite", "Huevos"]
console.log(ingredienteEnMalEstado(menuDelDia, "bagnaCauda", "Lechuga")); // "El menú está perfecto"
