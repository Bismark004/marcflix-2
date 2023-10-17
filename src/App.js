import React, { useState, useEffect } from 'react';
import Movies from './Components/movies'
import Heading from './Components/heading'
import SearchBox from './Components/searchbox'
import './App.css'
import AddFavourites from './Components/AddFavourites'
import RemoveFavourites from './Components/RemoveFavourites'



function App () {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');


const getMovieRequest = async(search) => {
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=a0e00ef9&s=${search}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.Search){
    setMovies(data.Search);
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