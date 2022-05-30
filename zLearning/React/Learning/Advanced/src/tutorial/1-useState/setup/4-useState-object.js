import React, { useState } from 'react';

const UseStateObject = () => {

  const [person,setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  const [name,setName] = useState('peter');
  const [age,setAge] = useState(24);
  const [message,setMessage] = useState('random Message');
  
  const changeMessage = () =>{
    //the below line will wipe the whole object and set as 'Hello World' as string 
    //into the person
    // setPerson('Hello World');

    //here also except message all data will be wiped out
    // setPerson({message: 'Hello World'});

    //so to preserve value using spread operators
    // setPerson({...person,message: 'Hello World'});
    
    setMessage('Hello World');

  };

  return (
    < >
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3> */}
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change Message
      </button>
    </>
  );
};

export default UseStateObject;
