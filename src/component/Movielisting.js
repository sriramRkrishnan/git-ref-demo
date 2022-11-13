import React, { useEffect } from "react";
import { fetchAsyncMovies ,getId } from "../features/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Movielisting = () => {

  const movieName = useSelector((state)=>{
    return state.movies.search
  })
  const dispatch = useDispatch();
  const movieList = useSelector((state) => {
    return state.movies.movies;
  });



  useEffect(() => {
    dispatch(fetchAsyncMovies(movieName))
   // eslint-disable-next-line
  }, [movieName]);

  const renderMovies = movieList.Response === "True" ? (
      movieList.Search.map((li) => {
        return (
          <div className="card" key={Math.random()}>
            <img className="poster" src={li.Poster} alt="" />
            <h3>{li.Title}</h3>
            <Link to='/details' onClick={()=>{dispatch(getId(li.imdbID))}} className='link-1'>Show Details</Link>
          </div>
        );
      })
    ) : (
      <div>
        <h3>search movies / series</h3>
      </div>
    );
  return <div className="movie">{renderMovies}</div>;
};

export default Movielisting;
