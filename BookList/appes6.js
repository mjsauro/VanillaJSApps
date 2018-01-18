class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.querySelector("#book-list");

    //Create TR
    const row = document.createElement("tr");

    //Insert Cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</td>
      `;

    list.appendChild(row);
  }
  showAlert(message, className) {
    //Create div
    const div = document.createElement("div");

    //add classes
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector(".container");
    //get form
    const form = document.querySelector("#book-form");
    //insert alert
    container.insertBefore(div, form);
    //Timeout after 3 seconds
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#isbn").value = '';
  }
}

//local storage class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));

    }
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function (book) {
      const ui = new UI;

      //add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn, index) {
    const books = Store.getBooks();
    books.forEach(function (book) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

//DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);


// Event listener for adding book
document.querySelector('#book-form').addEventListener('submit', function (e) {
  //Get form values
  const title = document.querySelector("#title").value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;

  //Instantiate book
  const book = new Book(title, author, isbn);

  //Instantiate UI
  const ui = new UI();

  //add to local storage
  Store.addBook(book);

  // Validate form
  if (title === '' | author === '' | isbn === '') {
    //Errow Alert
    ui.showAlert("Plase fill in all fields.", 'error');
  } else {
    //Add book to list
    ui.addBookToList(book);
    //show alert
    ui.showAlert("Book Added!", "success");
    //Clear book form
    ui.clearFields();
  }


  e.preventDefault();
});

// Event listener for delete
document.querySelector("#book-list").addEventListener('click', function (e) {

  //instantiate new ui
  const ui = new UI();

  //delete
  ui.deleteBook(e.target);

  //remove from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  //show alert
  ui.showAlert('Book removed from list', 'success');

  e.preventDefault();
});