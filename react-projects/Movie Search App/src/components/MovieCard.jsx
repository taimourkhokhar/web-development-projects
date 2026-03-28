import React from 'react'
import '../css/MovieCard.css'

const MovieCard = (props) => {
  return (
    <div className="card">
      <img id='main-img' src={props.img} alt="" />

      <div className="data-part">
        <h2>{props.name}</h2>

        {/* ❤️ Favorite Icon */}
        <img
          id='fav-img'
          src={props.imag}
          alt=""
          onClick={(e) => {
            e.stopPropagation(); // prevent card click
            props.toggleFavourite(props.movie);
          }}
          style={{
            cursor: "pointer",
            filter: props.isFav
              ? "invert(21%) sepia(96%) saturate(7481%) hue-rotate(356deg) brightness(95%) contrast(118%)"
              : "grayscale(100%)"
          }}
        />
      </div>
    </div>
  )
}

export default MovieCard