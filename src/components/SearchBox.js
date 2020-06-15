import React from 'react';
import './SearchBox.css';


const SearchBox = ({ searchChange }) => {
  return (
    <div className="inputBox">
      <input
        className="input"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;