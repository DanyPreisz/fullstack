// Obtener elementos del DOM
const formularioAgregarLibro = document.getElementById(
  "formulario-agregar-libro"
);
const inputTitulo = document.getElementById("titulo");
const inputAutor = document.getElementById("autor");
const inputGenero = document.getElementById("genero");
const inputAnioPublicacion = document.getElementById("anio-publicacion");

// Arreglo para almacenar los libros
const libros = [];

// Manejar evento de envío del formulario de agregar libro
formularioAgregarLibro.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener valores de los campos del formulario
  const titulo = inputTitulo.value;
  const autor = inputAutor.value;
  const genero = inputGenero.value;
  const anioPublicacion = inputAnioPublicacion.value;

  // Crear objeto de libro
  const libro = {
    titulo: titulo,
    autor: autor,
    genero: genero,
    añoPublicacion: anioPublicacion,
  };

  // Agregar el libro al arreglo
  libros.push(libro);

  // Limpiar campos del formulario
  inputTitulo.value = "";
  inputAutor.value = "";
  inputGenero.value = "";
  inputAnioPublicacion.value = "";

  // Actualizar la visualización de la biblioteca
  mostrarLibros();
});

// Función para mostrar los libros en el contenedor
function mostrarLibros() {
  // Limpiar el contenedor de libros
  librosContainer.innerHTML = "";

  // Recorrer los libros del arreglo y generar elementos HTML para cada uno
  libros.forEach((libro) => {
    const libroElement = document.createElement("div");
    libroElement.classList.add("libro");

    const tituloElement = document.createElement("h3");
    tituloElement.textContent = libro.titulo;
    libroElement.appendChild(tituloElement);

    const autorElement = document.createElement("p");
    autorElement.textContent = "Autor: " + libro.autor;
    libroElement.appendChild(autorElement);

    const generoElement = document.createElement("p");
    generoElement.textContent = "Género: " + libro.genero;
    libroElement.appendChild(generoElement);

    const anioElement = document.createElement("p");
    anioElement.textContent = "Año de Publicación: " + libro.añoPublicacion;
    libroElement.appendChild(anioElement);

    librosContainer.appendChild(libroElement);
  });
}

// Llamar a la función para mostrar los libros al cargar la página
mostrarLibros();
