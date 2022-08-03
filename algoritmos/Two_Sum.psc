Algoritmo Two_Sum
	Definir dato, tamaño, target Como Entero	
	Escribir "Ingrese la suma de dos números."
	Leer target
	Escribir "Ingrese la cantidad de números."
	leer tamaño
	Escribir "Ingrese los ", tamaño," números."
	Dimension nums[tamaño]	
	Para i<-0 Hasta tamaño-1 Con Paso 1
		leer dato
		nums[i]<-dato	
	FinPara		
	Para i<-0 Hasta tamaño-1 Con Paso 1
		Escribir "Índice ",i," contiene: ",nums[i]
	FinPara	
	Para i=0 Hasta tamaño-1 Con Paso 1	
		Para j<-i+1 Hasta tamaño-1 Con Paso 1						
			Si (nums[i])+(nums[j])=(target) Entonces
				Escribir  "El par de números es [", nums[i], "," nums[j],"]"
				Escribir "El par de índices es [", i, "," j,"]"
			Fin Si		
		FinPara		
	FinPara
FinAlgoritmo 