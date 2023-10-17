import React from 'react'
import './movies.css'

function Movies({movies}) {
    const displayMovies = movies.map((movie) => {
        return <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}alt='movie'/>
        </div>
    });
    return (
        <>
        <div className='movies'>
          {displayMovies}
        </div>
       
        </>
    )
}
export default Movies;