import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <div className='search-bar-container'>
      <SearchIcon fontSize='medium' className='SearchIcon' />
      <input
        id='search-input'
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search Twitter'
        value={search}
      />
    </div>
  );
};

export default SearchBar;
