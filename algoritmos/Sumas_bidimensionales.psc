Algoritmo Sumas_bidimensionales 
	//Suma de las diagonales principales.
	//Promedio de la fila y columna escogida por el usuario final.
	//Determine el número mayor y menor de la matriz
	//¿Cuántas veces se repite un número dado?
	Escribir Sin Saltar "Eliga una fila o columna : [1 - 4]";
	Leer dato;
	Si (dato > 0 y dato <= 4) Entonces = 0;
		Para f = 1 hasta 4 Con paso 1 Hacer 
			s = s + suma[dato,f];
		FinPara
		Escribir "PROMEDIO DE FILA : ", s/4;s = 0;
		Para c = 1 hasta 4 Con paso 1 Hacer
			s = s + suma[c,dato];
		FinPara
		Escribir "PROMEDIO DE COLUMNA : ", s/4;
	SiNo
		Escribir "Error de ingreso...";

		
		
		
	FinSi
	Para f = 1 hasta 4 Con paso 1 Hacer
		Para c = 1 hasta 4 Con paso 1 Hacer
			Si (may < suma[f,c]) Entonces
				may = suma[f,c];
			FinSi
		FinPara
	FinPara
	men = may;
	Para f = 1 hasta 4 Con paso 1 Hacer
		Para c = 1 hasta 4 Con paso 1 Hacer
			Si (men > suma[f,c]) Entonces
				men = suma[f,c];
			FinSi
		FinPara
	FinPara
	Escribir "MAYOR ES :", may;
	Escribir "MENOR ES :", men;
	Escribir Sin Saltar "Ingrese número : ";
	leer dato;
	Para f = 1 hasta 4 Con paso 1 
		
			Para c = 1 hasta 4 Con paso 1 Hacer				
				Si (dato == suma[f,c]) Entonces
					repite = repite + 1;
				FinSi
	FinPara
FinPara

	Escribir "SE REPITE : ", repite, " VECES";
FinAlgoritmo

		