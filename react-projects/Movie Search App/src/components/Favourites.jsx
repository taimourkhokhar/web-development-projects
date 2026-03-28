import React from 'react'
import '../css/Fav.css'

const Favourites = ({ fave, showOnlyFav, setShowOnlyFav }) => {
  return (
    <div className='card-item'>
      <h1 id='favhead'>Favourites</h1>

      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          id="favcheck"
          checked={showOnlyFav}
          onChange={() => setShowOnlyFav(!showOnlyFav)}
        />
      </label>


    </div>
  )
}

export default Favourites