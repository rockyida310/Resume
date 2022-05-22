import React, { useEffect, useState } from "react";
import ReactDomClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddToFavourites from "./components/AddToFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
//CSS

import "./index.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    if (searchValue) {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_IMDB_API_KEY}`;
      const response = await fetch(url);

      const responseJson = await response.json();
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  //now useEffect will run whenever searchValue changes

  // will be called only once
  useEffect(()=>{
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );
    setFavourites(movieFavourites);
  },[]);

  const saveFavouritesToLocalStorage = (favourites) => {
    localStorage.setItem('react-movie-app-favourites',JSON.stringify(favourites));
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveFavouritesToLocalStorage(newFavouriteList);
  };

  const RemoveFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite)=>{
      return favourite.imdbID !== movie.imdbID
    });
    setFavourites(newFavouriteList);
    saveFavouritesToLocalStorage(newFavouriteList);
  };

  
  
  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movies" />
          <SearchBox value={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className="row d-flex justify-content-center">
          <MovieList
            movies={movies}
            favouriteComponent={AddToFavourites}
            handleFavouritesClick={addFavouriteMovie}
          />
        </div>
        <div className="row d-flex align-items center mt-4 mb-4">
          <MovieListHeading heading="Favourites" />
        </div>
        <div className="row">
          <MovieList
            movies={favourites}
            favouriteComponent={RemoveFavourites}
            handleFavouritesClick={RemoveFavouriteMovie}
          />
        </div>
      </div>
    </>
  );
}

//new way
const container = document.getElementById("root");
const root = ReactDomClient.createRoot(container);
root.render(<App />);
