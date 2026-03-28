import React, { useEffect, useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar'
import MovieCard from './components/MovieCard'
import fav from './assets/fav.png'
import Favourites from './components/Favourites'


const App = () => {
const [text, setText] = useState('')
const [movies, setMovies] = useState([])
const [fave, setFav] = useState([])
const [showOnlyFav, setShowOnlyFav] = useState(false) 



function toggleFavourite(movie){
  const exists=fave.find((item) => item.id===movie.id)
  if (exists){
    setFav(fave.filter((item)=>item.id!==movie.id))

  }else{
    setFav([...fave,movie])
  }


}
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="main-wrapper"> 
      <Searchbar
      text={text}
      setText={setText}
      />
     <Favourites
  fave={fave}
  showOnlyFav={showOnlyFav}
  setShowOnlyFav={setShowOnlyFav}
/>
  <div className="container">
{(showOnlyFav ? fave : movies)
  .filter((ans) =>
    ans.title.toLowerCase().includes(text.toLowerCase())
  )
  .map((movie) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      name={movie.title}
      img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      imag={fav}
      toggleFavourite={toggleFavourite}
      isFav={fave.some((item) => item.id === movie.id)}
    />
))}
</div>
      
    </div>
  )
}

export default App