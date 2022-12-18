import React from 'react';
import { useGlobalContext } from '../context/context';

const SearchForm = () => {
  const {handleSearch} = useGlobalContext()
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search News</h2>
      <input
        type="text"
        className="form-input"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchForm