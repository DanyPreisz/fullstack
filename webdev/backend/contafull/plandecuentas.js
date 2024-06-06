// Definir la clase Clasificación
class Clasificacion {
  constructor(codClasificacion, nombreClasificacion) {
    this.codClasificacion = codClasificacion;
    this.nombreClasificacion = nombreClasificacion;    
  }
}
const Clasificaciones = [
     new Clasificacion (1,'Activo'),
     new Clasificacion (2,'Pasivo'),
     new Clasificacion (3,'Patrimonio Neto'),  
     new Clasificacion (4,'Resultados Positivos'),  
     new Clasificacion (5,'Resultados Negativos')    
];
// Definir la clase Rubro
class Rubro {
  constructor(codClasificacion, codRubro, nombreRubro) {
    this.codClasificacion = codClasificacion;
    this.codRubro = codRubro;
    this.nombreRubro = nombreRubro;
  }
}
const Rubros = [
     new Rubro (1,1,'Activo Corriente')         
];

// Definir la clase SubRubro
class SubRubro {
  constructor(codClasificacion,codRubro,codSubRubro, nombreSubRubro, descripcionSubRubro) {
    this.codClasificacion = codClasificacion;
    this.codRubro = codRubro;
    this.codSubRubro = codSubRubro;
    this.nombreSubRubro = nombreSubRubro;
    this.descripcionSubRubro = descripcionSubRubro;
  }
}
const SubRubros = [
     new SubRubro (1,1,1,'Caja y Bancos')
];
const json = JSON.stringify(SubRubros);
console.log(json)
