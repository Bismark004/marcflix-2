import React, { useState, useEffect } from 'react';
import Movies from './Components/movies'
import Heading from './Components/heading'
import SearchBox from './Components/searchbox'
import './App.css'



function App () {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');


const getMovieRequest = async(searchQuery) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=8daab53e806e1a389e43ee17bc9cdff8`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.results){
    setMovies(data.results);
  }
 
}

useEffect(() =>{
  getMovieRequest(search);
}, [search]);



  return (
    <div className='app'>
     <div className='header'>
      <Heading  heading='Movies'/>
      <SearchBox  
       search={search}
       setSearch={setSearch}/>

     </div>
     <Movies movies={movies}
      className='movies'/>
     



    </div>



  )
}
export default App;