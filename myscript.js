const grid = document.getElementById("books");
let myLibrary = [];
let count = 1;

//Books Object 
function Books(title, author, pages, read) {
  this.title = title;
  this.createButtons(this.title);

  this.author = author;
  this.createButtons(this.author);

  this.pages = pages;
  this.createButtons(this.pages);

  this.read = read;
  this.createButtons(this.read);

  this.counterButton();
  myLibrary[count] = [this.title, this.author, this.pages, this.read];

  count++;
}

//create Buttons
Books.prototype.createButtons = function (name) {
  let button = document.createElement("BUTTON");
  button.textContent = name;
  button.style.height = "50px";
  button.style.width = "250px";
  button.style.backgroundColor = "#ffffff";
  grid.append(button);
};

//counter Button
Books.prototype.counterButton = function () {
  let countButton = document.createElement("BUTTON");
  countButton.textContent = count;
  grid.append(countButton);
};

//add a button that implements all the inputs from the user and create new Books object
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", (event) => {
  const titleField = document.getElementById("title").value;
  const authorField = document.getElementById("author").value;
  const pagesField = document.getElementById("pages").value;
  const readField = document.getElementById("read").value;

  const randomBook = new Books(titleField, authorField, pagesField, readField);
  console.log(myLibrary + " Add Book");
});

//add a button Delete 
const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click" , (event) => {
    myLibrary.splice((count - 1), (count - 1));
    console.log(myLibrary + " delete Book" + (count - 1));
})

const theHobbit = new Books(
  "The Hobbit",
  "J.R.R Tolkien",
  "295 pages",
  "not read yet"
);

const georgeOrwell = new Books(
  "1984",
  "George Orwell",
  "241 pages",
  "read"
);

const nickBostrom = new Books(
  "Superintelligence",
  "Nick Bostrom",
  "311 pages",
  "read"
);

const rayKurzweil = new Books(
  "The Singularity Is Near",
  "Ray Kurzweil",
  "652 pages",
  "not yet read"
)
