// Esta función se encarga de cargar el archivo JSON y mostrar su contenido en la página
async function mostrarJSON() {
  try {
    const response = await fetch(
      "C:UsersUsuario/fullstack/frontend/biblioteca/libros.json"
    ); // Cambia 'libros.json' por la ruta de tu archivo JSON
    const libros = await response.json();

    const jsonDiv = document.getElementById("json");

    jsonDiv.innerHTML = `<pre>${JSON.stringify(libros, null, 2)}</pre>`;
  } catch (error) {
    console.error("Error al cargar y mostrar el JSON:", error);
  }
}

// Llama a la función mostrarJSON cuando la página está completamente cargada
document.addEventListener("DOMContentLoaded", mostrarJSON);
