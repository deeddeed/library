const grid = document.getElementById("books");
let myLibrary = [];
let updatedLibrary = [];
let counter = 0;

//check local storage for randomBook data
console.log("START");
updatedLibrary = JSON.parse(window.localStorage.getItem("myLibrary"));
if (updatedLibrary) {
  myLibrary = updatedLibrary;
  //loops thru each Item in myLibrary
  for (let i = 0; i < myLibrary.length; i++) {
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

    if(myLibrary[i].read === "READ"){
      console.log("READ");
      readButton.classList.add("readButtonRead");
    }
    counterButton = document.createElement("BUTTON");
    counterButton.textContent = counter;
    counterButton.classList.add("counterButton");
    counter++;

    grid.append(
      titleButton,
      authorButton,
      pagesButton,
      readButton,
      counterButton
    );
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
  let counterButton = document.createElement("BUTTON");
  counterButton.textContent = counter;
  counterButton.classList.add("counterButton");

  grid.append(
    titleButton,
    authorButton,
    pagesButton,
    readButton,
    counterButton
  );

  console.log("Add Book" + JSON.stringify(randomBook) + myLibrary.length);
  counter++;
  myLibrary.push(randomBook);
  window.localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
});

//Delete Button
function deleteButton() {
  let changeDeleteBtn = document.getElementById("delete");
  changeDeleteBtn.style.backgroundColor = "#" + 66101 + "F";
  let deleteBtn = document.getElementsByClassName("counterButton");

  console.log("DELETE counterBOOKs " + counter);
  for (let i = 0; i <= counter; i++) {
    deleteBtn[i].addEventListener("click", (event) => {
      let check = deleteBtn[i].textContent;
      deleteBtn[i].style.backgroundColor = "#" + 66101 + "F";
      myLibrary.splice(check, 1);
      window.localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
      // location.reload();

      console.log(
        "DELETE " + check + JSON.stringify(myLibrary[check]) + myLibrary.length
      );
    });
  }
}

function deleteAll() {
  window.localStorage.removeItem("myLibrary");
  location.reload();
}
//Save Button
function reload() {
  location.reload();
}
