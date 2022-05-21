import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";


const unsplash = new Unsplash({accessKey: process.env.REACT_APP_UNSPLASH_MY_ACCESS_KEY});

const SearchPhotos = () => {
  const [query,setQuery] = useState("");
  const [pics,setPics] = useState();


  const searchPhotos = async ()=>{
    // e.preventDefault();
    //e.preventDefault() stops the page from reloading whenever the Search button is clicked
    // console.log("Submitting the Form")
    unsplash.search
    .photos(query)
    .then(toJson)
    .then((json) => {
      // console.log(json.results);
      setPics(json.results);
    });

  };

  searchPhotos();

  return (
    <>
      <form className="form" 
      onSubmit={searchPhotos}
      >
        <label className="label">
          {" "}
          📷
        </label>
        <input 
          type="text" 
          name="query" 
          className="input" 
          placeholder="apple"
          value={query}
          onChange={(e)=> {
            setQuery(e.target.value);
           } }
          />
        {/* <button type="submit" className="button">
          Search
        </button> */}
      </form>
      <div className="card-list">
        {pics && 
          pics.map((pic,i) => {
            return ( 
            <div className="card" key={i}>
            <img 
              src={pic.urls.full} 
              alt={pic.alt_description}
              width= '100%'
              height = '100%'
              className="card--image" />
          </div>);
           
          })
        }
      </div>
    </>
  );
};

export default SearchPhotos;
