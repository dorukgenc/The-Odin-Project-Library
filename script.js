const myLibrary = [];
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.isRead ? "read" : "not read yet"
    }`;
  };
}
function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
addBookToLibrary(
  new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, false)
);
addBookToLibrary(new Book("The Martian", "Andy Weir", 369, true));
addBookToLibrary(new Book("The Hunger Games", "Suzanne Collins", 374, true));
addBookToLibrary(new Book("The Da Vinci Code", "Dan Brown", 489, false));
addBookToLibrary(new Book("The Alchemist", "Paulo Coelho", 197, true));
addBookToLibrary(
  new Book("The Catcher in the Rye", "J.D. Salinger", 277, false)
);
addBookToLibrary(
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true)
);
addBookToLibrary(new Book("The Shining", "Stephen King", 447, false));

const library = document.querySelector(".library");
function displayLibrary() {
  myLibrary.forEach((element) => {
    const book = document.createElement("div");
    book.innerText = element.info();
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(element), 1);
      library.innerText = "";
      displayLibrary();
    });
    book.appendChild(removeButton);

    const iReadThisButton = document.createElement("button");
    iReadThisButton.innerText = "Toggle read status";
    iReadThisButton.addEventListener("click", () => {
      element.isRead = !element.isRead;
      library.innerText = "";
      displayLibrary();
    });
    book.appendChild(iReadThisButton);
    library.appendChild(book);
  });
}

displayLibrary();

const newBookButton = document.querySelector(".newBookButton");
newBookButton.addEventListener("click", () => {
  const newBookForm = document.querySelector(".newBookForm");
  newBookForm.style.display = "block";
});

const addBookButton = document.querySelector(".addBookButton");
addBookButton.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").checked;
  addBookToLibrary(new Book(title, author, pages, isRead));
  library.innerText = "";
  displayLibrary();
});
