import React from 'react'

const Book = (props) => {
  //attribute, eventHandle
  //onClick,onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(props.title);
  };

  const complexExample = (authorName) => {
    console.log(authorName);
  };

  return (
    <>
      <article
        className="book"
        onMouseOver={() => {
          console.log(props.title);
        }}
      >
        <img src={props.imageUrl} alt="" />
        <h1 onClick={() => console.log(props.title)}>{props.title}</h1>
        <h4 className="author">{props.authorName}</h4>
        <button type="button" onClick={clickHandler}>
          clickMe
        </button>
        <button type="button" onClick={() => complexExample(props.authorName)}>
          Complex
        </button>
      </article>
    </>
  );
}

export default Book