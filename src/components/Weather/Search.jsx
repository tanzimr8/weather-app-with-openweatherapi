import React from 'react'

const Search = ({search,setSearch,handleSearch}) => {
  return (
    <div className='search-container'>
        <input type="text"
        name='city'
        placeholder='Enter a city name'
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
        />
        <button onClick={handleSearch} className='btn-search'>Search City</button>
    </div>
  )
}

export default Search
