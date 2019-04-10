import React from 'react';

const SearchForm = props => {
  const onSubmit = () => {
    event.preventDefault();
    props.onFormSubmit();

  };
  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter search term.."
        onChange={event => props.onSearchValueChange(event.target.value)}
        />
        <button disabled={props.isSearching}>Search</button>

        <button 
        onClick={props.onSingleSearchClick} 
        disabled={props.isSearching}>
        Im Feeling Funny
        </button>

      </form>

  );



};
export default SearchForm;