Algoritmo If_Else_If
	Definir a, b Como Entero;
	Definir resultado Como Caracter;
	Escribir "Ingrese un n�mero";
	Leer a;
	Escribir "Ingrese un n�mero";
	Leer b;		
	
	Si a > b entonces
		resultado= "La primera condici�n se cumpli�";			
	SiNo
		si a==b Entonces
			resultado= "La segunda condici�n se cumpli�";
		SiNo
			si a<b
				resultado= "La tercera condici�n se cumpli�";
			SiNo
				resultado= "No se cumple ninguna condici�n.";
			FinSi			
		FinSi
	FinSi
	Escribir "El resultado de la evaluaci�n if-Else-If: ", resultado;
FinAlgoritmo