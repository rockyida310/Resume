import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('Helllo world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[ 1];
  // console.log(`The value is ${value}`);
  // console.log(handler);

  //array destructuring
  const [text,setText] = useState("random title");


  const handleClick = () =>{
    if(text==="random title"){
      setText("Hello World");
    }else{
      setText("random title");
    }
  }

  return (
    < >
      <h2>{text}</h2>
      <button 
      className="btn"
      onClick={handleClick}
      >
        Toggle Title 
      </button>
    </>
  );
};

export default UseStateBasics;
