/*
Exercício:
Implemente uma classe de livraria que é capaz de devolver, emprestar livros e listar eles com todas suas informações
Crie uma classe livro para ser cadastrado na livraria.
*/

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title) {
    this.books.push(title);
  }

  borrow(title) {
    if (title.isAvailable) {
      console.log(`Você pegou emprestado o livro de ${title.title}`);
      title.borrowBook();
    } else {
      console.log("Livro já foi emprestado, pegue outro.");
    }
  }

  return(title) {
    if (!title.isAvailable) {
      console.log("O livro emprestado foi devolvido!");
      title.returnBook();
    } else {
      console.log("Livro já foi devolvido.");
    }
  }

  listBooks() {
    if (this.books.length <= 0) {
      console.log("Não há livros para poder listar!");
    } else {
      this.books.forEach((book) => {
        const confirmation = book.isAvailable === true ? "Sim" : "Não";

        console.log(
          `----------\nNome do Livro: ${book.title}\nAutor: ${book.author}\nAno: ${book.year}\nDisponível: ${confirmation}\n`,
        );
      });
    }
  }
}

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
  }

  borrowBook() {
    this.isAvailable = false;
  }

  returnBook() {
    this.isAvailable = true;
  }
}
