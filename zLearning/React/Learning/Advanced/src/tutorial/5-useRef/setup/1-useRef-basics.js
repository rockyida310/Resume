import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
    divContainer.current.innerText = "Submitted";
    divContainer.current.style.fontWeight = "bold";
  }

  //no need to pass dependency array beacuse there will be no rerender 
  //as we are not using useState 
  useEffect(()=>{
      console.log(refContainer.current);
      refContainer.current.focus();
  });

  return(
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div> 
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>
        Please Fill Up
      </div>
    </>
  )
};

export default UseRefBasics;
