Algoritmo par_o_impar_entre_1_y_10
	Definir n Como Entero
	Escribir "Ingresa un numero"
	leer n
	si n > 0 y n < 11 Entonces
		si n mod 2 == 0 Entonces
			Escribir "El numero ",n," es par"
		SiNo
			Escribir "El numero ",n," es impar"
		FinSi
	SiNo
		Escribir "El numero esta fuera del rango"
	FinSi
FinAlgoritmo