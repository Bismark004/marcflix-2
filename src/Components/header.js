import React, {useState, useEffect} from 'react';
import './header.css'

import Logo from '../Images/Icons/tv.png';
import Button from '../Images/Icons/Search.png';
import Menu from '../Images/Icons/Menu.jpg';
import Tomatoes from '../Images/Icons/tomatoes.png';
import Imdb from '../Images/Icons/imdb.png';
import Trailer from '../Images/Icons/Button.png';
import Display from '../Images/Poster.png';
import Prev from '../Images/Icons/bxs-chevron-left-circle.png';
import Next from '../Images/Icons/bxs-chevron-right-circle.png';

function Header() {
   const [movies, setMovies] = useState([]);
   const [search, setSearch] = useState('');
   const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    const getMovieRequest = async (searchQuery) => {
     const apiKey = '8daab53e806e1a389e43ee17bc9cdff8';
     const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}`;

     try{
        const response = await fetch(url);
        const data = await response.json();

        if (data.results) {
            setMovies(data.results);
        }
      }
      catch (error) {
        console.log.error('Error fetching data', error);
      }

    }

    useEffect(() => {
        getMovieRequest(search);
    }, [search])

    function handleSearchChange(event) {
        setSearch(event.target.value);
        setCurrentMovieIndex(0);
    }

    function handleNextClick () {
        if (movies.length > 0) {
            setCurrentMovieIndex(currentMovieIndex + 1);
        }
    }


    function handlePrevClick () {
        if(movies.length > 0) {
           setCurrentMovieIndex(currentMovieIndex - 1);
        }
    }


    function displayImage() {
        if (search === '') {
          return null; // Display nothing
        } else if (movies.length > 0 && currentMovieIndex >= 0 && currentMovieIndex < movies.length) {
          return (
            <div className='display'>
              <img
                src={`https://image.tmdb.org/t/p/w500${movies[currentMovieIndex].poster_path}`}
                alt={movies[currentMovieIndex].title}
                style={{ width: '100%', height: '100%'}}
              />
            </div>
          );
        } else {
          return null; // Display nothing
        }
      }
      
      




  return (
    <div className='header'>
         
        {displayImage()}

        {search !== '' && currentMovieIndex > 0 && (
            <a className='prev' onClick={handlePrevClick}>
              <img src={Prev} alt='previous'/>
            </a>
        )}
         
        {search !==  '' && movies.length < movies.length - 1 && (
          <a className='next'  onClick={handleNextClick}>
            <img src={Next} alt='next' />
           </a>
        )}
    

      <div className='rest'>
        <nav>
          <div className='logo'>
            <img src={Logo} alt='TV Logo' />
            <span>MARCFLIX</span>
          </div>

          <div className='search'>
            <input type='text' placeholder='What do you want to watch' 
            value={search}
            onChange={handleSearchChange}/>
            <img src={Button} alt='search icon' className='search-icon' />
          </div>
        </nav>
        <section>
          <div className='description-box'>
            <div className='parabellum'>
              <p>John Wick 3: Parabellum</p>
            </div>
            <div className='rating'>
              <div className='imdb'>
                <img src={Imdb} alt='imdb' />
                <span>86.0/100</span>
              </div>
              <div className='rotten-tomatoes'>
                <img src={Tomatoes} alt='rotten tomatoes' />
                <span>97%</span>
              </div>
            </div>
            <div className='synopsis'>
              <p>
                John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
              </p>
            </div>
            <div className='trailer-btn-container'>
              <button className='trailer-btn'>
                <img src={Trailer} alt='button' />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
