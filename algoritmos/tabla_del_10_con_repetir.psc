Algoritmo tabla_del_10_con_repetir	
	Dimension mi_tabla[11];
	Definir i Como Entero;
	i <- 0;
	Repetir
		mi_tabla[i] <- i*10;
		i <- i+1;
		Hasta Que(i>10)
		i <- 0;
		Repetir
			Escribir "mi_tabla[" Sin Saltar;
			Escribir i Sin Saltar;
			Escribir "] = " Sin Saltar;
			Escribir i Sin Saltar;
			Escribir "x10 = " Sin Saltar;
			Escribir mi_tabla[i];
			i <- i+1;
			Hasta Que(i>10)	
FinAlgoritmo
