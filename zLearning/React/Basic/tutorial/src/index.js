import React from "react";
import ReactDomClient from "react-dom/client";

//CSS

import "./index.css";

// stateless functional component
// always return jsx

// function Greeting(){
//   return <h4>this is aditya and this is my first component</h4>
// }

// const Greeting = () => {
//   return React.createElement('h1',{},'hello world');
// };

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// <>  .. </>  , React Fragment

// Nested Components , React tools

// function Greeting(){
//   return(
//     <>
//       <h2>Jogn Doe</h2>
//       <p>This is my message</p>
//     </>
//   )
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement(
//       'h1',
//       {},
//       'Hello World2'
//     ));
// };

// function Greeting(){
//   return(
//     <>
//       <Person/>
//       <Message/>
//     </>
//   )
// }

// const Person = () => <h2>Jogn Doe</h2>;
// const Message = () => {
//   return <p>This is my message</p>;
// }

// function BookList() {
//   return (
//     <>
//       <section className="booklist">
//         <Book />
//       </section>
//     </>
//   );
// }

// const Book = () => {
//   return (
//     <>
//       <article className="book">
//         <Image />
//         <Title />
//         <Author />
//       </article>
//     </>
//   );
// };

// const Image = () => {
//   return (
//     <>
//       <img
//         src="https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg"
//         alt=""
//       />
//     </>
//   );
// };

// const Title = () => <h1>The Power of Your Subconscious Mind</h1>;
// const Author = () => (
//   <h4
//     className="author"
//     style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
//   >
//     Joseph Murphy{" "}
//   </h4>
// );

// const title = 'The Power of Your Subconscious Mind';
// const authorName = 'Joseph Murphy';
// const imageUrl = "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg";

// function BookList() {
//   return (
//     <>
//       <section className="booklist">
//         <Book job="developer"/>
//         <Book title="random title" number={Math.random()}/>
//       </section>
//     </>
//   );
// }

// const Book = (props) => {
//   console.log(props);
//   return (
//     <>
//       <article className="book">
//         <img
//           src={imageUrl}
//           alt=""
//         />
//         <h1>{title}</h1>
//         <h4 className="author">{authorName.toUpperCase()}</h4>
//         <p>{props.job}</p>
//         <p>{props.title}</p>
//         <p>{props.number}</p>
//       </article>
//     </>
//   );
// };

// const book1 = {
//   title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
//   authorName: "Jeff Keller",
//   imageUrl: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg"
// };

// const book2 = {
//   title: "The Power of Your Subconscious Mind",
//   authorName: "Joseph Murphy",
//   imageUrl: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg"
// };

// function BookList() {
//   return (
//     <>
//       <section className="booklist">
//         <Book
//           title={book1.title}
//           authorName={book1.authorName}
//           imageUrl={book1.imageUrl}
//         />
//         <Book
//           title={book2.title}
//           authorName={book2.authorName}
//           imageUrl={book2.imageUrl}
//         />
//       </section>
//     </>
//   );
// }

// const Book = (props) => {
//   return (
//     <>
//       <article className="book">
//         <img src={props.imageUrl} alt="" />
//         <h1>{props.title}</h1>
//         <h4 className="author">{props.authorName}</h4>
//       </article>
//     </>
//   );
// };

// const book1 = {
//   title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
//   authorName: "Jeff Keller",
//   imageUrl: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg"
// };

// const book2 = {
//   title: "The Power of Your Subconscious Mind",
//   authorName: "Joseph Murphy",
//   imageUrl: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg"
// };

// function BookList() {
//   return (
//     <>
//       <section className="booklist">
//         <Book
//           title={book1.title}
//           authorName={book1.authorName}
//           imageUrl={book1.imageUrl}
//         >
//           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci obcaecati iste expedita, voluptatum cumque voluptate necessitatibus at cupiditate soluta totam?</p>
//         </Book>
//         <Book
//           title={book2.title}
//           authorName={book2.authorName}
//           imageUrl={book2.imageUrl}
//         />
//       </section>
//     </>
//   );
// }

// // const Book = ({imageUrl,title,authorName,children}) => {
// //   return (
// //     <>
// //       <article className="book">
// //         <img src={imageUrl} alt="" />
// //         <h1>{title}</h1>
// //         <h4 className="author">{authorName}</h4>
// //         {children}
// //       </article>
// //     </>
// //   );
// // };

// const Book = (props) => {
//   console.log(props);
//   return (
//     <>
//       <article className="book">
//         <img src={props.imageUrl} alt="" />
//         <h1>{props.title}</h1>
//         <h4 className="author">{props.authorName}</h4>
//         {props.children}
//       </article>
//     </>
//   );
// };

// const books = [{
//   id: 1,
//   title: "Attitude Is Everything: Change Your Attitude ... Change Your Life!",
//   authorName: "Jeff Keller",
//   imageUrl: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg"
// },
// {
//   id: 2,
//   title: "The Power of Your Subconscious Mind",
//   authorName: "Joseph Murphy",
//   imageUrl: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_UY327_FMwebp_QL65_.jpg"
// }];

// // const names = ['aditya','n','patel']
// // const newNames = names.map((name)=>{
// //   return <h1>{name}</h1>
// // });

// // console.log(newNames);

// function BookList() {
//   return (
//     <>
//       <section className="booklist">
//        {/* {names} */}
//        {/* {newNames} */}
//        {books.map((book,i) => {
//         //  const {img,title,author} = book;
//         //  return(
//         //    <Book key={i} book={book} />
//         //  );
//          return(
//           <Book key={book.id} book={book} />
//         );
//        })}
//       </section>
//     </>
//   );
// }


// const Book = (props) => {
//    const {imageUrl,title,authorName} = props.book;
//   return (
//     <>
//       <article className="book">
//         <img src={imageUrl} alt="" />
//         <h1>{title}</h1>
//         <h4 className="author">{authorName}</h4>
//       </article>
//     </>
//   );
// };

//spread operator
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
   const {imageUrl,title,authorName} = props;
  return (
    <>
      <article className="book">
        <img src={imageUrl} alt="" />
        <h1>{title}</h1>
        <h4 className="author">{authorName}</h4>
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
