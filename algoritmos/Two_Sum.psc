Algoritmo Two_Sum
	Definir dato,tama�o,target Como Entero
	Escribir 'Ingrese la suma de dos n�meros.'
	Leer target
	Escribir 'Ingrese la cantidad de n�meros.'
	Leer tama�o
	Escribir 'Ingrese los ',tama�o,' n�meros.'
	Dimension nums[tama�o]
	Para i<-0 Hasta tama�o-1 Hacer
		Leer dato
		nums[i] <- dato
	FinPara
	Para i<-0 Hasta tama�o-1 Hacer
		Escribir '�ndice ',i,' contiene: ',nums[i]
	FinPara
	Para i<-0 Hasta tama�o-1 Hacer
		Para j<-i Hasta tama�o-1 Hacer
			Si (nums[i])+(nums[j])=(target) Entonces
				Escribir 'El par de n�meros es [',nums[i],',',nums[j],']'
				Escribir 'El par de �ndices es [',i,',',j,']'
			FinSi
		FinPara
	FinPara
FinAlgoritmo
