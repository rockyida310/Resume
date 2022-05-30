import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(()=>{
      // setValue(value+1);

      //using below method to get current state instead of state 2 seconds before
      setValue((prevState)=>{
        //must return something other wise functionality will break
        return prevState+1;
      });
    },2000);
  };

  return (
    <>
      <section style={{margin : '4rem 0'}}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={()=>setValue(value-1)}>Decrease</button>
        <button className="btn" onClick={()=>setValue(0)}>Reset</button>
        <button className="btn" onClick={()=>setValue(value+1)}>Increase</button>
      </section>
      <hr></hr>
      <section style={{margin : '4rem 0'}}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>Increase Later</button>
      </section>

    </>
  );
};

export default UseStateCounter;
