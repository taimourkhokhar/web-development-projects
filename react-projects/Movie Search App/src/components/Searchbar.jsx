import React from 'react'
import '../css/Searchbar.css'

const Searchbar = ({text,setText}) => {
  return (
    <div className='main'>
      <h1>Movie App</h1>
      <div className="data-part">
      <input value={text} onChange={(e)=>setText(e.target.value)} type="text" name="" id="" placeholder='Enter a movie name' />
      <button>Search</button>
      </div>
     
    </div>
  )
}

export default Searchbar
