"use strict";
// toma dos numeros, los suma y muestra el resultado
var a, b, c;
// para cargar un dato, se le muestra un mensaje al usuario
// y luego se almacena el dato en una variable a para el primero y b para el segundo
a = parseInt(prompt("Ingrese el primer numero"));
b = parseInt(prompt("Ingrese el segundo numero"));
// ahora se calcula la suma y se guarda el resultado en la variable c
c = a + b;
// se muestra el resultado, precedido de un
// mensaje para avisar al usuario, todo en una sola instruccion
console.log("La suma de", a, "más", b, "es", c);
