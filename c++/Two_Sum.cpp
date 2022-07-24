// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

#include<iostream>
using namespace std;

// En C++ no se puede dimensionar un arreglo estático con una dimensión no constante.
// PSeInt sobredimensionará el arreglo utilizando un valor simbólico ARREGLO_MAX.
// Sería posible crear un arreglo dinámicamente con los operadores new y delete, pero
// este mecanismo aún no está soportado en las traducciones automáticas de PSeInt.
#define ARREGLO_MAX 100

// Para leer variables de texto se utiliza el operador << del objeto cin, que
// lee solo una palabra. Para leer una linea completa (es decir, incluyendo los
// espacios en blanco) se debe utilzar getline (ej, reemplazar cin>>x por
// getline(cin,x)), pero obliga a agregar un cin.ignore() si antes del getline
// se leyó otra variable con >>.

int main() {
	int dato;
	int dimnumeros[ARREGLO_MAX];
	int i;
	int j;
	int tamano;
	int tamaño;
	int target;
	cout << "Ingrese la suma de dos números." << endl;
	cin >> target;
	cout << "Ingrese la cantidad de números." << endl;
	cin >> tamano;
	cout << "Ingrese los " << tamano << " números." << endl;
	for (i=0;i<=tamano-1;i++) {
		cin >> dato;
		dimnumeros[i] = dato;
	}
	for (i=0;i<=tamano-1;i++) {
		cout << "Índice " << i << " contiene: " << dimnumeros[i] << endl;
	}
	for (i=0;i<=tamano-1;i++) {
		for (j=i+1;j<=tamano-2;j++) {
			if ((dimnumeros[i])+(dimnumeros[j])==(target)) {
				cout << "El par de números es [" << dimnumeros[i] << "," << dimnumeros[j] << "]" << endl;
				cout << "El par de índices es [" << i << "," << j << "]" << endl;
			}
		}
	}
	return 0;
}

