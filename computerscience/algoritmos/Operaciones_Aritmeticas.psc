Algoritmo Operaciones_Aritmeticas
	// Programa que realiza las 6 operaciones aritméticas
	// básicas para dos números enteros y muestra los resultados por pantanlla.
	Definir x,z Como Entero; // Estos son los dos operandos
	Dimension resultados[6]; // Arreglo para guardar resultado operaciones
	Dimension operaciones[6]; //Arreglo para guardar símbolo operaciones
	operaciones[0] <- ' + '; // Suma
	operaciones[1] <- ' - '; // Resta
	operaciones[2] <- ' * '; // Producto
	operaciones[3] <- ' / '; // División
	operaciones[4] <- ' ^ '; // Potencia
	operaciones[5] <- ' MOD '; // Resto
	// Pedimos los dos números al usuario por teclado
	Escribir 'Dame el primer número: ' Sin Saltar;
	Leer x;
	Escribir 'Dame el segundo número: ' Sin Saltar;
	Leer z;
	// Asignar a cada posición del array resultados, la expresión aritmética que le corresponde
	resultados[0] <- x+z;
	resultados[1] <- x-z;
	resultados[2] <- x*z;
	resultados[3] <- x/z;
	resultados[4] <- x^z;
	resultados[5] <- x MOD z;
	Escribir 'Pulsa una tecla para continuar...';
	Esperar Tecla;
	Borrar Pantalla;
	Escribir ConvertirATexto(x) + operaciones[0] + ConvertirATexto(z) + ' = ';
	Escribir resultados[0];
	Esperar 2 Segundos;
	Escribir ConvertirATexto(x) + operaciones[1] + ConvertirATexto(z) + ' = ';
	Escribir resultados[1];
	Esperar 2 Segundos;
	Escribir ConvertirATexto(x) + operaciones[2] + ConvertirATexto(z) + ' = '; 
	Escribir resultados[2];
	Esperar 2 Segundos;
	Escribir ConvertirATexto(x) + operaciones[3] + ConvertirATexto(z) + ' = ';
	Escribir resultados[3];
	Esperar 2 Segundos;
	Escribir ConvertirATexto(x) + operaciones[4] + ConvertirATexto(z) + ' = ';
	Escribir resultados[4];
	Esperar 2 Segundos;
	Escribir ConvertirATexto(x) + operaciones[5] + ConvertirATexto(z) + ' = ';
	Escribir resultados[5];
	Esperar 2 Segundos;
FinAlgoritmo
