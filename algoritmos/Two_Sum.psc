Algoritmo Two_Sum
	Definir dato, tama�o, target Como Entero	
	Escribir "Ingrese la suma de dos n�meros."
	Leer target
	Escribir "Ingrese la cantidad de n�meros."
	leer tama�o
	Escribir "Ingrese los ", tama�o," n�meros."
	Dimension nums[tama�o]	
	Para i<-0 Hasta tama�o-1 Con Paso 1
		leer dato
		nums[i]<-dato	
	FinPara		
	Para i<-0 Hasta tama�o-1 Con Paso 1
		Escribir "�ndice ",i," contiene: ",nums[i]
	FinPara	
	Para i=0 Hasta tama�o-1 Con Paso 1	
		Para j<-i+1 Hasta tama�o-1 Con Paso 1						
			Si (nums[i])+(nums[j])=(target) Entonces
				Escribir  "El par de n�meros es [", nums[i], "," nums[j],"]"
				Escribir "El par de �ndices es [", i, "," j,"]"
			Fin Si		
		FinPara		
	FinPara
FinAlgoritmo 