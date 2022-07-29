Algoritmo Two_Sum
	Definir dato, tamaño, target Como Entero	
	Escribir "Ingrese la suma de dos números."
	Leer target
	Escribir "Ingrese la cantidad de números."
	leer tamaño
	Escribir "Ingrese los ", tamaño," números."
	Dimension dimNumeros[tamaño]	
	Para i<-0 Hasta tamaño-1 Con Paso 1
		leer dato
		dimNumeros[i]<-dato	
	FinPara		
	Para i<-0 Hasta tamaño-1 Con Paso 1
		Escribir "Índice ",i," contiene: ",dimNumeros[i]
	FinPara	
	Para i=0 Hasta tamaño Con Paso 1	
		Para j<-i+1 Hasta tamaño-1 Con Paso 1						
			Si (dimNumeros[i])+(dimNumeros[j])=(target) Entonces
				Escribir  "El par de números es [", dimNumeros[i], "," dimNumeros[j],"]"
				Escribir "El par de índices es [", i, "," j,"]"
			Fin Si		
		FinPara		
	FinPara
FinAlgoritmo 