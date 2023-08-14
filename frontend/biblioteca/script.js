// Obtener referencia al elemento de la lista de libros
var bookList = document.getElementById('book-list');

// Agregar libro al almacenamiento local
function addBook() {
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;

  if (title && author) {
    var book = { title: title, author: author };
    var books = JSON.parse(localStorage.getItem('books')) || [];

    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

    displayBooks();
  }
}

// Mostrar libros en el elemento de la lista de libros
function displayBooks() {
  var books = JSON.parse(localStorage.getItem('books')) || [];

  bookList.innerHTML = '';

  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var listItem = document.createElement('div');
    listItem.innerHTML = '<strong>Título:</strong> ' + book.title + ' <strong>Autor:</strong> ' + book.author;
    bookList.appendChild(listItem);
  }
}

// Buscar libro en el almacenamiento local
function searchBook() {
  var searchTerm = document.getElementById('title').value;
  var books = JSON.parse(localStorage.getItem('books')) || [];
  var searchResults = [];

  for (var i = 0; i < books.length; i++) {
    var book = books[i];

    if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      searchResults.push(book);
    }
  }

  bookList.innerHTML = '';

  for (var i = 0; i < searchResults.length; i++) {
    var book = searchResults[i];
    var listItem = document.createElement('div');
    listItem.innerHTML = '<strong>Título:</strong> ' + book.title + ' <strong>Autor:</strong> ' + book.author;
    bookList.appendChild(listItem);
  }
}

// Eliminar libro del almacenamiento local
function deleteBook() {
  var searchTerm = document.getElementById('title').value;
  var books = JSON.parse(localStorage.getItem('books')) || [];
  var updatedBooks = [];

  for (var i = 0; i < books.length; i++) {
    var book = books[i];

    if (!book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      updatedBooks.push(book);
    }
  }

  localStorage.setItem('books', JSON.stringify(updatedBooks));
  displayBooks();
}


// Mostrar los libros almacenados al cargar la página
displayBooks();
