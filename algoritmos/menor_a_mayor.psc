Algoritmo menor_a_mayor
	Definir a, b, c Como Entero;
	Escribir 'Ingrese tres números';
	Leer a;
	Leer b;
	Leer c;	
	si (a < b y a < c) entonces
		si (b < c)
			Escribir a," ", b, " ", c;
		SiNo			
			Escribir a," ", c, " ", b;				
		FinSi
	FinSi	
	si (b < a y b < c) Entonces
		si (a < c) Entonces
			Escribir b," ", a," ", c;
		SiNo
			Escribir b," ", c," ", a;
		FinSi
	FinSi	
	si (c < a y c < b) Entonces
		si (a < b)
			Escribir c," ", a," ", b;
		SiNo
			Escribir c," ", b," ", a;
		FinSi
	FinSi
FinAlgoritmo
