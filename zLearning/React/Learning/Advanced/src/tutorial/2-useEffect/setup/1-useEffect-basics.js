import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value,setValue] = useState(0);

  //runs on every render 
  // useEffect(()=>{
  //   console.log('call useEffect');
  //   if(value>0)
  //     document.title = `New Messages(${value})`
  // });

  //passing array of dependencies , if it is empty then
  //it will only run on initial render
  // useEffect(()=>{
  //   console.log('call useEffect');
  //   if(value>0)
  //     document.title = `New Messages(${value})`
  // },[]);

  //on passing value inside array of dependency , useEffect will run whenever 
  //value changes
  useEffect(()=>{
    console.log('call useEffect');
    if(value>0)
      document.title = `New Messages(${value})`
  },[value]);


  console.log('render component');

  return (
    < >
      <h1>{value}</h1>
      <button className="btn" onClick={()=>setValue(value+1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
