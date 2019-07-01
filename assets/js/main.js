/* global document */
let close_modal = document.getElementsByClassName("close")[0];
/* global document */
let modal = document.getElementById("modal");
/* global document */
let submit_button = document.querySelector("#create-book");


// libary scripts
let myLibary = [];

class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleReadStatus(){
        this.read = !this.read;
    }
}

function addBookToLibary(title, author, pages, read){
    // create book object
    const new_book = new Book(title, author, pages, read);
    // push book into libary array
    myLibary.push(new_book);
    render();
}

/* global document */
document.getElementById("add-book-form").addEventListener("submit", (e)=> {
    e.preventDefault();
    // get book values
    /* global document */
    let title = document.getElementById("title").value;
    /* global document */
    let author = document.getElementById("author").value;
    /* global document */
    let pages = document.getElementById("pages").value;
    /* global document */
    let read = document.getElementById("read").checked? "read": "not read";
    addBookToLibary(title, author, pages, read);
    clear();
})

function deleteBookFromLibary(book_idx){
    myLibary.splice(book_idx, 1);
    render();
}


function render(){
    const collection = document.querySelector("#collection");
    while (collection.hasChildNodes()) {
        collection.removeChild(collection.firstChild);
    }
    myLibary.forEach((book) => {
        const row = document.createElement("div");
        row.setAttribute("class", "book");
        const ico = document.createElement("span");
        ico.setAttribute("class", "pd ico col-sm-1 fas fa-book")
        const title = document.createElement("span");
        title.setAttribute("class", "pd title col-sm-4");
        title.textContent = book.title;
        const author = document.createElement("span");
        author.setAttribute("class", "pd author col-sm-3");
        author.textContent = book.author;
        const pages = document.createElement("span");
        pages.setAttribute("class", "pd pages col-sm-2");
        pages.textContent = book.pages;
        const read = document.createElement("span");
        if (book.read == "read") {
            read.setAttribute("class", "pd status col-sm-1 fas fa-check");
        } else {
            read.setAttribute("class", "pd status col-sm-1 far fa-square");
        }
        const del = document.createElement("span");
        del.setAttribute("class", "pd delete col-sm-1 fas fa-trash");
        row.appendChild(ico);
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(read);
        row.appendChild(del);
        collection.appendChild(row);
    })
}

function clear(){
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
}


// modal scripts
open_modal.addEventListener("click", () => {
    if (modal.classList.value === "hidden") {
        modal.classList.remove("hidden");
        modal.classList.add("show");
    }
})

close_modal.addEventListener("click", () =>  {
    if (modal.classList.value === "show") {
        modal.classList.remove("show");
        modal.classList.add("hidden");
    }
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show"); 
        modal.classList.add("hidden");
    }
}

render();