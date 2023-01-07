Algoritmo Two_Sum
	Definir dato,tamaño,target Como Entero
	Escribir 'Ingrese la suma de dos números.'
	Leer target
	Escribir 'Ingrese la cantidad de números.'
	Leer tamaño
	Escribir 'Ingrese los ',tamaño,' números.'
	Dimension nums[tamaño]
	Para i<-0 Hasta tamaño-1 Hacer
		Leer dato
		nums[i] <- dato
	FinPara
	Para i<-0 Hasta tamaño-1 Hacer
		Escribir 'Índice ',i,' contiene: ',nums[i]
	FinPara
	Para i<-0 Hasta tamaño-1 Hacer
		Para j<-i Hasta tamaño-1 Hacer
			Si (nums[i])+(nums[j])=(target) Entonces
				Escribir 'El par de números es [',nums[i],',',nums[j],']'
				Escribir 'El par de índices es [',i,',',j,']'
			FinSi
		FinPara
	FinPara
FinAlgoritmo
