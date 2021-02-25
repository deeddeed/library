const grid = document.getElementById("books");
let myLibrary = [];
let counter = 0;

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


//Books Object 
function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // myLibrary = [this.title, this.author, this.pages, this.read];
  // myLibrary.push(title + author + pages + read);
}


//add a button that implements all the inputs from the user and create new Books object
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", (event) => {
  const titleField = document.getElementById("title").value;
  const authorField = document.getElementById("author").value;
  const pagesField = document.getElementById("pages").value;
  const readField = document.getElementById("read").value;

  const randomBook = new Books(titleField, authorField, pagesField, readField);
  
  console.log(myLibrary + " Add Book" + counter);
  counter++;
  myLibrary.push(titleField + authorField + pagesField + readField);
  start();

  });

//create the Buttons/Divs for each element in myLibrary
function createButtons(){

    myLibrary.forEach((element) => {    
    let button = document.createElement("BUTTON");
    button.textContent = element;
    button.style.height = "50px";
    button.style.width = "550px";
    button.style.backgroundColor = "#ffffff";
    grid.append(button);

    });
  }

//delete Button
const delBtn = document.getElementById("delete");
delBtn.addEventListener("click", (event)=> {
    myLibrary.splice(counter -1 , counter -1);
    console.log("DELETE" + myLibrary.length);
    counter--;
});
  

function start(){
  createButtons();
  
  console.log(myLibrary.length + " = myARRAY LENGTH " + myLibrary + " =LIBRARYCONTENT" + " counter =" + counter);

}
// myLibrary.push(Books);

