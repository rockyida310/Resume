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

// function Greeting(){
//   return(
//     <div>
//       <h1>Hello World</h1>
//     </div>
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

// takes two things --> what we want to render , where we want to render
ReactDom.render(<Greeting/>,document.getElementById('root'));
// this code places greeting method inside of the root section of index.html

