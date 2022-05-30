import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width,setWidth] = useState(window.innerWidth);
  const [height,setHeight] = useState(window.innerHeight);
  
  const checkSize = () =>{
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(()=>{
    console.log('koni chiva');
    window.addEventListener('resize',checkSize);

    //if empty array is not to be passed then must have to use cleanup function
    return () =>{
      console.log('Cleanup');
      window.removeEventListener('resize',checkSize);
    }

  },[]);

  return(
    < >
      <h1>window</h1>
      <h2>width = {width} Px </h2>
      <h2>height = {height} Px </h2>
    </>
  ); 
   
};

export default UseEffectCleanup;
