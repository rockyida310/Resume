import React from "react";
import ReactDomClient from "react-dom/client";

//CSS

import "./index.css";
import {books} from "./components/books";
import Book from './components/Book'
// named export must match exactly , 
// for javascript file we need not to write extension name

function BookList() {
  return (
    <>
      <section className="booklist">
        {books.map((book, i) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </>
  );
}


// takes two things --> what we want to render , where we want to render
// ReactDom.render(<BookList />, document.getElementById("root"));
// this code places greeting method inside of the root section of index.html

//new way
const container = document.getElementById("root");
const root = ReactDomClient.createRoot(container);
root.render(<BookList />);
