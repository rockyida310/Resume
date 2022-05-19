import React from 'react'
import ReactDom from 'react-dom'

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

function Greeting(){
  return(
    <>
      <Person/>
      <Message/>
    </>
  )
}

const Person = () => <h2>Jogn Doe</h2>;
const Message = () => {
  return <p>This is my message</p>;
}


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

// takes two things --> what we want to render , where we want to render
ReactDom.render(<Greeting/>,document.getElementById('root'));
// this code places greeting method inside of the root section of index.html

