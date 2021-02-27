const grid = document.getElementById("books");
let myLibrary = [];
let updatedLibrary = [];

//check local storage for randomBook data
console.log("START");
updatedLibrary = JSON.parse(localStorage.getItem("myLibrary"));
if (updatedLibrary) {

    myLibrary = updatedLibrary;
    //loops thru each Item in myLibrary
    for(let i = 0; i < myLibrary.length; i++){
      console.log("CHECK");
    
    //creates the buttons for each book
    titleButton = document.createElement("BUTTON");
    titleButton.textContent = myLibrary[i].title;
    titleButton.classList.add("titleButton");
    authorButton = document.createElement("BUTTON");
    authorButton.textContent = myLibrary[i].author;
    authorButton.classList.add("authorButton");
    pagesButton = document.createElement("BUTTON");
    pagesButton.textContent = myLibrary[i].pages;
    pagesButton.classList.add("pagesButton");
    readButton = document.createElement("BUTTON");
    readButton.textContent = myLibrary[i].read;
    readButton.classList.add("readButton");
    grid.append(titleButton, authorButton, pagesButton, readButton);
    }
  

}

//add a button that implements all the inputs from the user and creates a new Book Object which gets saved in myLibrary[]
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


  //creates the buttons for each book
  let titleButton = document.createElement("BUTTON");
  titleButton.textContent = randomBook.title;
  titleButton.classList.add("newADD");
  let authorButton = document.createElement("BUTTON");
  authorButton.textContent = randomBook.author;
  authorButton.classList.add("newADD");
  let pagesButton = document.createElement("BUTTON");
  pagesButton.textContent = randomBook.pages;
  pagesButton.classList.add("newADD");
  let readButton = document.createElement("BUTTON");
  readButton.textContent = randomBook.read;
  readButton.classList.add("newADD");
  grid.append(titleButton, authorButton, pagesButton, readButton);
  
  console.log("Add Book" + JSON.stringify(randomBook));

  myLibrary.push(randomBook);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
});

//Delete Button 
const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", (event) => {
  console.log("DELETE");

  localStorage.removeItem("myLibrary");
  location.reload();
 
});

//Save Button 
function reload(){
  location.reload();
}

