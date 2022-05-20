import React from "react";
import ReactDomClient from "react-dom/client";

//CSS

import "./index.css";

const books = [{
  id: 1,
  title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
  authorName: "Jeff Keller",
  imageUrl: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg"
},
{
  id: 2,
  title: "The Power of Your Subconscious Mind",
  authorName: "Joseph Murphy",
  imageUrl: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg"
}];


function BookList() {
  return (
    <>
      <section className="booklist">
       {books.map((book,i) => {
         return(
          <Book key={book.id} {...book} ></Book>
        );
       })}
      </section>
    </>
  );
}


const Book = (props) => {
  //attribute, eventHandle
  //onClick,onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(props.title);
  }

  const complexExample = (authorName) => {
    console.log(authorName);
  }

  return (
    <>
      <article className="book">
        <img src={props.imageUrl} alt="" />
        <h1 onClick={() => console.log(props.title)} >{props.title}</h1>
        <h4 className="author">{props.authorName}</h4>
        <button type="button" onClick={clickHandler}>clickMe</button>
        <button type="button" onClick={() => complexExample(props.authorName)}>Complex</button>
      </article>
    </>
  );
};


// takes two things --> what we want to render , where we want to render
// ReactDom.render(<BookList />, document.getElementById("root"));
// this code places greeting method inside of the root section of index.html

//new way
const container = document.getElementById("root");
const root = ReactDomClient.createRoot(container);
root.render(<BookList />);
