// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function (book) {
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
};

//Show alert
UI.prototype.showAlert = function (message, className) {
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

};

//Delete book from list
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};

// Clear form
UI.prototype.clearFields = function () {
  document.querySelector("#title").value = '';
  document.querySelector("#author").value = '';
  document.querySelector("#isbn").value = '';
};

// Event listener for add book

document.querySelector('#book-form').addEventListener('submit', function (e) {
  //Get form values
  const title = document.querySelector("#title").value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;

  //Instantiate book
  const book = new Book(title, author, isbn);

  //Instantiate UI
  const ui = new UI();

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

  //show alert
  ui.showAlert('Book removed from list', 'success');

  e.preventDefault();
});