Algoritmo Two_Sum
	Definir dato, tama�o, target Como Entero	
	Escribir "Ingrese la suma de dos n�meros."
	Leer target
	Escribir "Ingrese la cantidad de n�meros."
	leer tama�o
	Escribir "Ingrese los ", tama�o," n�meros."
	Dimension dimNumeros[tama�o]	
	Para i<-0 Hasta tama�o-1 Con Paso 1
		leer dato
		dimNumeros[i]<-dato	
	FinPara		
	Para i<-0 Hasta tama�o-1 Con Paso 1
		Escribir "�ndice ",i," contiene: ",dimNumeros[i]
	FinPara	
	Para i=0 Hasta tama�o Con Paso 1	
		Para j<-i+1 Hasta tama�o-1 Con Paso 1						
			Si (dimNumeros[i])+(dimNumeros[j])=(target) Entonces
				Escribir  "El par de n�meros es [", dimNumeros[i], "," dimNumeros[j],"]"
				Escribir "El par de �ndices es [", i, "," j,"]"
			Fin Si		
		FinPara		
	FinPara
FinAlgoritmo 