import React from 'react';
import { useGlobalContext } from '../context';



const Search = () => {

  const { query, searchPost } = useGlobalContext();
  return (
    <div className="flex justify-center mt-5">

      <form  className="flex"  onSubmit={ (e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search Any News..."
          className="border p-2 rounded-l  w-96 focus:outline-none"
          value={query}
          onChange={ (e) => searchPost(e.target.value)}
          />

      </form>
    </div>
  );
};

export default Search;
