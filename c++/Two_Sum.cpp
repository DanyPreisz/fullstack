// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

#include<iostream>
using namespace std;

// En C++ no se puede dimensionar un arreglo est�tico con una dimensi�n no constante.
// PSeInt sobredimensionar� el arreglo utilizando un valor simb�lico ARREGLO_MAX.
// Ser�a posible crear un arreglo din�micamente con los operadores new y delete, pero
// este mecanismo a�n no est� soportado en las traducciones autom�ticas de PSeInt.
#define ARREGLO_MAX 100

// Para leer variables de texto se utiliza el operador << del objeto cin, que
// lee solo una palabra. Para leer una linea completa (es decir, incluyendo los
// espacios en blanco) se debe utilzar getline (ej, reemplazar cin>>x por
// getline(cin,x)), pero obliga a agregar un cin.ignore() si antes del getline
// se ley� otra variable con >>.

int main() {
	int dato;
	int dimnumeros[ARREGLO_MAX];
	int i;
	int j;
	int tamano;
	int tama�o;
	int target;
	cout << "Ingrese la suma de dos n�meros." << endl;
	cin >> target;
	cout << "Ingrese la cantidad de n�meros." << endl;
	cin >> tamano;
	cout << "Ingrese los " << tamano << " n�meros." << endl;
	for (i=0;i<=tamano-1;i++) {
		cin >> dato;
		dimnumeros[i] = dato;
	}
	for (i=0;i<=tamano-1;i++) {
		cout << "�ndice " << i << " contiene: " << dimnumeros[i] << endl;
	}
	for (i=0;i<=tamano-1;i++) {
		for (j=i+1;j<=tamano-2;j++) {
			if ((dimnumeros[i])+(dimnumeros[j])==(target)) {
				cout << "El par de n�meros es [" << dimnumeros[i] << "," << dimnumeros[j] << "]" << endl;
				cout << "El par de �ndices es [" << i << "," << j << "]" << endl;
			}
		}
	}
	return 0;
}

