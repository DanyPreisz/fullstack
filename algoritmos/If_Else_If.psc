Algoritmo If_Else_If
	Definir a, b Como Entero;
	Definir resultado Como Caracter;
	Escribir "Ingrese un número";
	Leer a;
	Escribir "Ingrese un número";
	Leer b;		
	
	Si a > b entonces
		resultado= "La primera condición se cumplió";			
	SiNo
		si a==b Entonces
			resultado= "La segunda condición se cumplió";
		SiNo
			si a<b
				resultado= "La tercera condición se cumplió";
			SiNo
				resultado= "No se cumple ninguna condición.";
			FinSi			
		FinSi
	FinSi
	Escribir "El resultado de la evaluación if-Else-If: ", resultado;
FinAlgoritmo