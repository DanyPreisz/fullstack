Algoritmo pares_entre_1_y_99
	Definir x,n Como Entero
	x = 1
	Mientras x <> 0 Hacer
	Escribir "Ingresa un numero entre 1 y 99"
		leer n
		si n > 0 y n < 100 Entonces
			si n mod 2 == 0 Entonces
				Escribir "El numero es par"				
			SiNo				
				Escribir "El numero es impar"		
			FinSi			
			x = 0			
		FinSi		
	FinMientras
FinAlgoritmo
