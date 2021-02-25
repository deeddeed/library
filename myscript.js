const grid = document.getElementById("books");
let myLibrary = [];
let counter = 0;

let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let readInput = document.getElementById("read");

//check local storage for randomBook data
let randomBook = JSON.parse(localStorage.getItem("randomBook"));
console.log(randomBook.title);

if (randomBook) {
  titleInput = randomBook.title;
  authorInput = randomBook.author;
  pagesInput = randomBook.pages;
  readInput = randomBook.read;
}

//add a button that implements all the inputs from the user
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  //get the input from the user
  let titleField = document.getElementById("title").value.trim();
  let authorField = document.getElementById("author").value.trim();
  let pagesField = document.getElementById("pages").value.trim();
  let readField = document.getElementById("read").value.trim();

  //if values are valid
  if (!titleField || !authorField || !pagesField || !readField) {
    alert("Fill in the forms");
    return;
  }

  //save in local storage
  let randomBook = {
    title: titleField,
    author: authorField,
    pages: pagesField,
    read: readField,
  };

  myLibrary.push(randomBook);
  localStorage.setItem("randomBook", JSON.stringify(randomBook));


  let titleButton = document.createElement("BUTTON");
  titleButton.textContent = randomBook.title;
  titleButton.classList.add("titleButton");
  let authorButton = document.createElement("BUTTON");
  authorButton.textContent = randomBook.author;
  authorButton.classList.add("authorButton");
  let pagesButton = document.createElement("BUTTON");
  pagesButton.textContent = randomBook.pages;
  pagesButton.classList.add("pagesButton");
  let readButton = document.createElement("BUTTON");
  readButton.textContent = randomBook.read;
  readButton.classList.add("readButton");

  grid.append(titleButton, authorButton, pagesButton, readButton);

  console.log(myLibrary + " Add Book" + counter);

});

//fill the array with buttons
// function fillArray(){

//   myLibrary.forEach((element) => {
//     let titleButton = document.createElement("BUTTON");
//     titleButton.textContent = randomBook.title;
//     let authorButton = document.createElement("BUTTON");
//     authorButton.textContent = randomBook.author;
//     let pagesButton = document.createElement("BUTTON");
//     pagesButton.textContent = randomBook.pages;
//     let readButton = document.createElement("BUTTON");
//     readButton.textContent = randomBook.read;

//     grid.append(titleButton, authorButton, pagesButton, readButton);
//   });

//   console.log(randomBook.title);

// }

//create the Buttons/Divs for each element in myLibrary
// function createButtons() {
//   myLibrary.forEach((element) => {
//     let button = document.createElement("BUTTON");
//     button.textContent = JSON.parse(localStorage.getItem("element"));
//     button.style.height = "50px";
//     button.style.width = "550px";
//     button.style.backgroundColor = "#ffffff";
//     grid.append(button);
//   });
// }

// //delete Button
// const delBtn = document.getElementById("delete");
// delBtn.addEventListener("click", (event) => {
//   myLibrary.splice(counter, counter);
//   console.log("DELETE" + myLibrary.length);
//   counter--;
// });


// const theHobbit = new Books(
//   "The Hobbit",
//   "J.R.R Tolkien",
//   "295 pages",
//   "not read yet"
// );

// const georgeOrwell = new Books(
//   "1984",
//   "George Orwell",
//   "241 pages",
//   "read"
// );

// const nickBostrom = new Books(
//   "Superintelligence",
//   "Nick Bostrom",
//   "311 pages",
//   "read"
// );

// const rayKurzweil = new Books(
//   "The Singularity Is Near",
//   "Ray Kurzweil",
//   "652 pages",
//   "not yet read"
// )
