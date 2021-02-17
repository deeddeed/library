let myLibrary = [];
const grid = document.getElementById("books");

function Books(title, author, pages, read) {
  this.title = title;
  let titleField = document.createElement("BUTTON");
  titleField.textContent = this.title;
  titleField.style.height= "50px";
  titleField.style.width= "250px";
  grid.append(titleField);

  this.author = author;
  let authorField = document.createElement("BUTTON");
  authorField.textContent = this.author;
  authorField.style.height= "50px";
  authorField.style.width= "250px";
  grid.append(authorField);


  this.pages = pages;
  let pagesField = document.createElement("BUTTON");
  pagesField.textContent = this.pages;
  pagesField.style.height= "50px";
  pagesField.style.width= "250px";
  grid.append(pagesField);

  this.read = read;
  let readField = document.createElement("BUTTON");
  readField.textContent = this.read;
  readField.style.height= "50px";
  readField.style.width= "250px";
  grid.append(readField);

  this.info = function () {
    return title + author + pages + read;
  };
}

Books.prototype.addBooksToLibrary = function (numberOfBooks) {
  this.numberOfBooks = numberOfBooks;
  myLibrary[numberOfBooks] = [this.info()];
};

const theHobbit = new Books(
  " The Hobbit ",
  "J.R.R Tolkien ",
  "295 pages ",
  "not read yet"
);

const georgeOrwell = new Books(
  " 1984 ",
  "George Orwell ",
  "241 pages ",
  "read"
);

const nickBostrom = new Books(
  " Superintelligence",
  "Nick Bostrom",
  "311 pages ",
  "read "
);

//add a button that implements all the inputs from the user and create new Books object
const addBtn = document.getElementById("add");
  addBtn.addEventListener("click", (event) => {
    const titleField = document.getElementById("title").value;
    const authorField = document.getElementById("author").value;
    const pagesField = document.getElementById("pages").value;
    const readField = document.getElementById("read").value;

    const randomBook = new Books(
      titleField,
      authorField,
      pagesField,
      readField
    )
     
    })


