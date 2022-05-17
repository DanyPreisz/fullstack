"use strict";

var y = 5;
var texto = "";

do {
  for (let x = 0; x < y; x++) {
    texto = texto + "*";
  }
  console.log(texto);
  texto = "";
  y--;
} while (y > 0);
