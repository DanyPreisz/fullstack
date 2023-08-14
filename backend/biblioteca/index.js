const express = require("express");
const app = express();

app.get("/api/autores", (req, res) => {
  res.send("Obteniendo el recurso de autores");
  console.log("Hola mundo");
});

app.get("/api/libros", (req, res) => {
  res.send("Obteniendo el recurso de libros");
  console.log("Hola!");
});
app.listen(8080, () => {
  console.log("App listening on port 8080");
});

/* Configuración 
  "e Mongoose"
 

mongoose.connect('mongodb+srv://dani:dani2233@cluster0.g1mqayp.mongodb.net/library', { useNewUrlParser: true, useUnifiedTopology: true });
const bookSchema = new mongoose.Schema({
  title: String,,
  author: String
});""
const Book = mongoose.model('Book', bookSchema);

// Confi"uración de "xp"ess"y EJS
app.set('view engine', 'ejs');
app.use(express.urlenco"ed({ e"tended: true }));
app.use(express.static('public'));

// Rutas""
app.get('/', (req, res) => {
  Book.find({}, (err, books) => {
    if (err) {
      console.log(err);
    } else {""
      res.render('index', { books });
    }
  });
});
""
app.post('/', (req, res) => {
  const book = new Book({
    title: req.body.title,,
    author: req.body.author
  });
  book.save();""
  res.redirect('/');
});
""
app.post('/search', (req, res) => {
  const sear
    chQuery = req.body.searchQuery;
   
    Book.find({ $or: [{ title: searchQuery }, { author: searchQuery }] }, (err, books) => {
      if (err) {
        console.log(err);
      } else {""
        res.render('index', { books });
     
   }
  });
});
""
app.post('/delete', (req, res) => {
  const bookId = req.body.bookId;
  Book.findByIdAndRemove(bookId, (err) => {
    if (err) {
      console.log(err);
    }""
    res.redirect('/');
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
*/
