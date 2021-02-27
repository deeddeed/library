const grid = document.getElementById("books");
let myLibrary = [];

let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let readInput = document.getElementById("read");

//check local storage for randomBook data
myLibrary = JSON.parse(localStorage.getItem("myLibrary"));

if (myLibrary) {

    
    for(let i = 0; i < myLibrary.length; i++){
  
    console.log("Library = " + myLibrary.length + " myLibrary " + myLibrary.length + JSON.stringify(myLibrary));
  
    //creates the buttons for each book
    titleButton = document.createElement("BUTTON");
    titleButton.textContent = JSON.stringify(myLibrary[i].title);
    titleButton.classList.add("titleButton");
    authorButton = document.createElement("BUTTON");
    authorButton.textContent = JSON.stringify(myLibrary[i].author);
    authorButton.classList.add("authorButton");
    pagesButton = document.createElement("BUTTON");
    pagesButton.textContent = JSON.stringify(myLibrary[i].pages);
    pagesButton.classList.add("pagesButton");
    readButton = document.createElement("BUTTON");
    readButton.textContent = JSON.stringify(myLibrary[i].read);
    readButton.classList.add("readButton");
    grid.append(titleButton, authorButton, pagesButton, readButton);
    }
  

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
    alert("Please fill out everything. Thank you.");
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
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

  //creates the buttons for each book
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
  
  console.log(myLibrary + " Add Book");

});


