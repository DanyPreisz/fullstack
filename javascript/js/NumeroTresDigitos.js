// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function numerotresdigitos() {
	var x = new Number();
	document.write("Ingrese un n�mero",'<BR/>');
	x = Number(prompt());
	if ((x>100 && x<999)) {
		document.write("El n�mero ",x," tiene tres d�gitos",'<BR/>');
	} else {
		document.write("El n�mero ",x," no tiene tres d�gitos",'<BR/>');
	}
}

