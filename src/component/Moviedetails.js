import React, { useEffect } from "react";

import { fetchAsyncMoviesbyID } from "../features/movieSlice";
import { useSelector, useDispatch } from "react-redux";

const Moviedetails = () => {
  const dispatch = useDispatch();

  const id = useSelector((state) => {
    return state.movies.id;
  });

  const single = useSelector((state) => {
    return state.movies.singleMovie;
  });

  console.log(single);
  const localval = localStorage.getItem("id");

  useEffect(() => {
    
    !id ? dispatch(fetchAsyncMoviesbyID(localval)) : dispatch(fetchAsyncMoviesbyID(id)) 
    id ? localStorage.setItem("id", id) : localStorage.setItem("id", localval);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="movie-detail">
      <img className="single-poster" src={single.Poster} alt="" />
      <div>
        <div className="align">
          <h2 className="mar-1">Title : {single.Title}</h2>
          <h5 className="mar-1">Awards : {single.Awards}</h5>
          <p className="mar-1">{single.Actors}</p>
          <p className="mar-1 rating">IMDB Ratings : {single.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default Moviedetails;
