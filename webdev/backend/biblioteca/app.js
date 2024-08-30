document.addEventListener('DOMContentLoaded', () => {
    fetch('books.json')
        .then(response => response.json())
        .then(books => {
            const bookList = document.getElementById('book-list');
            books.forEach(book => {
                const li = document.createElement('li');
                li.className = 'book-item';
                
                li.innerHTML = `
                    <h2>${book.title}</h2>
                    <p><strong>Autor:</strong> ${book.author}</p>
                    <p><strong>Año:</strong> ${book.year}</p>
                `;
                
                bookList.appendChild(li);
            });
        })
        .catch(error => console.error('Error al cargar los libros:', error));
});
